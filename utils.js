/*
 * Shared helpers. Loaded before news.js / publications.js.
 */
const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => HTML_ESCAPES[c]);
}
