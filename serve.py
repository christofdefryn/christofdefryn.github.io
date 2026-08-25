#!/usr/bin/env python3
"""
Local dev server for this Jekyll-built site.

The site is deployed via GitHub Pages' built-in Jekyll build, but no Ruby/
Jekyll toolchain is set up locally. This renders the small subset of Liquid
used in this repo -- {% include %}, {% if %}/{% else %}/{% endif %},
{% unless %}/{% endunless %}, {% for %}/{% endfor %}, the `append`,
`capitalize` and `default` filters, and `layout:`/YAML front matter -- so
pages preview exactly as they do once deployed. It does not implement full
Jekyll (plugins, Markdown, collections, etc).

Requires PyYAML: pip install pyyaml

Usage: python serve.py [port]   (default port 4000)
"""
import http.server
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).parent
INCLUDES_DIR = ROOT / "_includes"
LAYOUTS_DIR = ROOT / "_layouts"

FRONT_MATTER_RE = re.compile(r'\A---\n(.*?\n)?---\n', re.S)
TAG_RE = re.compile(r'\{%-?\s*(\w+)([^%]*?)-?%\}')
VAR_RE = re.compile(r'\{\{-?\s*(.*?)\s*-?\}\}')


def parse_front_matter(text):
    m = FRONT_MATTER_RE.match(text)
    if not m:
        return {}, text
    raw = m.group(1) or ""
    data = yaml.safe_load(raw) or {}
    return data, text[m.end():]


def find_top_level_pipe(expr):
    in_quotes = False
    for i, ch in enumerate(expr):
        if ch == '"':
            in_quotes = not in_quotes
        elif ch == "|" and not in_quotes:
            return i
    return -1


def eval_expr(expr, context):
    expr = expr.strip()
    pipe_idx = find_top_level_pipe(expr)
    if pipe_idx != -1:
        base, filt = expr[:pipe_idx], expr[pipe_idx + 1:]
        return apply_filter(eval_expr(base, context), filt.strip(), context)
    if expr.startswith('"') and expr.endswith('"'):
        return expr[1:-1]
    if expr == "true":
        return True
    if expr == "false":
        return False
    m = re.match(r'^([\w.]+)\[([^\]]+)\]$', expr)
    if m:
        arr = eval_expr(m.group(1), context)
        idx = eval_expr(m.group(2), context)
        try:
            return arr[int(idx)]
        except Exception:
            return None
    return get_var(context, expr)


def get_var(context, path):
    parts = path.split(".")
    obj = context.get(parts[0])
    for p in parts[1:]:
        if obj is None:
            return None
        obj = obj.get(p) if isinstance(obj, dict) else getattr(obj, p, None)
    return obj


def apply_filter(value, filt, context):
    m = re.match(r'^(\w+)(?::\s*(.*))?$', filt)
    name, arg_expr = m.group(1), m.group(2)
    arg = eval_expr(arg_expr, context) if arg_expr else None
    if name == "append":
        return str(value) + str(arg)
    if name == "capitalize":
        return str(value).capitalize()
    if name == "default":
        return value if value else arg
    return value


def eval_condition(args, context):
    m = re.match(r'^(\S+)\s*==\s*(.+)$', args.strip())
    if m:
        return str(eval_expr(m.group(1), context)) == str(eval_expr(m.group(2), context))
    return bool(eval_expr(args.strip(), context))


def find_block(template, start, open_tag, close_tag):
    open_re = re.compile(r'\{%-?\s*' + open_tag + r'\b')
    close_re = re.compile(r'\{%-?\s*' + close_tag + r'\s*-?%\}')
    depth, pos = 1, start
    while True:
        om, cm = open_re.search(template, pos), close_re.search(template, pos)
        if cm is None:
            raise ValueError(f"no matching {{% {close_tag} %}}")
        if om and om.start() < cm.start():
            depth += 1
            pos = om.end()
        else:
            depth -= 1
            if depth == 0:
                return cm.end(), template[start:cm.start()]
            pos = cm.end()


def split_else(body):
    m = re.search(r'\{%-?\s*else\s*-?%\}', body)
    return (body, None) if not m else (body[:m.start()], body[m.end():])


def substitute_vars(text, context):
    return VAR_RE.sub(lambda m: str(eval_expr(m.group(1), context) or ""), text)


def parse_params(s):
    positions = [(m.start(), m.group(1)) for m in re.finditer(r'(?:^|(?<=\s))(\w+)=', s)]
    params = {}
    for i, (pos, key) in enumerate(positions):
        start = pos + len(key) + 1
        end = positions[i + 1][0] if i + 1 < len(positions) else len(s)
        params[key] = s[start:end].strip()
    return params


def render(template, context):
    out = []
    pos = 0
    while True:
        m = TAG_RE.search(template, pos)
        if not m:
            out.append(substitute_vars(template[pos:], context))
            break
        out.append(substitute_vars(template[pos:m.start()], context))
        tag, args = m.group(1), m.group(2).strip()

        if tag == "for":
            var, _, coll_expr = args.partition(" in ")
            end, body = find_block(template, m.end(), "for", "endfor")
            items = eval_expr(coll_expr.strip(), context) or []
            n = len(items)
            for i, item in enumerate(items):
                loop_ctx = dict(context, **{var.strip(): item,
                                             "forloop": {"last": i == n - 1, "first": i == 0, "index0": i}})
                out.append(render(body, loop_ctx))
            pos = end
        elif tag == "if":
            end, body = find_block(template, m.end(), "if", "endif")
            if_body, else_body = split_else(body)
            cond = eval_condition(args, context)
            out.append(render(if_body if cond else (else_body or ""), context))
            pos = end
        elif tag == "unless":
            end, body = find_block(template, m.end(), "unless", "endunless")
            cond = eval_condition(args, context)
            out.append(render(body if not cond else "", context))
            pos = end
        elif tag == "assign":
            var, _, val_expr = args.partition("=")
            context = dict(context, **{var.strip(): eval_expr(val_expr.strip(), context)})
            pos = m.end()
        elif tag == "include":
            name, _, param_str = args.partition(" ")
            params = {k: eval_expr(v, context) for k, v in parse_params(param_str).items()}
            inc_template = (INCLUDES_DIR / name).read_text(encoding="utf-8")
            out.append(render(inc_template, {"include": params, "page": context.get("page"),
                                              "content": context.get("content")}))
            pos = m.end()
        else:
            pos = m.end()
    return "".join(out)


def render_page(path: Path) -> bytes:
    front_matter, body = parse_front_matter(path.read_text(encoding="utf-8"))
    content = render(body, {"page": front_matter})
    layout_name = front_matter.get("layout")
    if layout_name:
        layout_text = (LAYOUTS_DIR / f"{layout_name}.html").read_text(encoding="utf-8")
        _, layout_body = parse_front_matter(layout_text)
        content = render(layout_body, {"page": front_matter, "content": content})
    return content.encode("utf-8")


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        url_path = self.path.split("?", 1)[0].split("#", 1)[0]
        if url_path == "/":
            url_path = "/index.html"
        fs_path = ROOT / url_path.lstrip("/")

        if fs_path.suffix == ".html" and fs_path.is_file():
            body = render_page(fs_path)
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        super().do_GET()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4000
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Serving {ROOT} at http://127.0.0.1:{port}/  (Ctrl+C to stop)")
    server.serve_forever()
