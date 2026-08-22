/*
 * Shared publications renderer. Reads the PUBLICATIONS array (defined in
 * publications-data.js, which must be loaded before this script).
 *
 * research.html calls renderPublications('pubList', { featuredOnly: true })
 * for the curated highlights list, and summarizeOutputs(tag) for each
 * project card's output counts.
 * Project pages call renderPublications('outputsList', { tags: ['<tag>'] })
 * to list every output tagged with that project.
 */
function getPublications({ tags = null, featuredOnly = false } = {}) {
    let items = [...PUBLICATIONS];
    if (tags) items = items.filter(pub => pub.tags.some(t => tags.includes(t)));
    if (featuredOnly) items = items.filter(pub => pub.featured !== false);
    return items.sort((a, b) => b.year - a.year);
}

function renderPublications(containerId, { tags = null, featuredOnly = false, emptyMessage = 'No outputs yet — check back soon.' } = {}) {
    const container = document.getElementById(containerId);
    if (!container) return [];

    const items = getPublications({ tags, featuredOnly });

    if (items.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">${emptyMessage}</p>`;
        return items;
    }

    container.innerHTML = items.map(pub => {
        const links = (pub.links || []).map(l =>
            `<a href="${l.url}" class="pub-link" target="_blank" rel="noopener">${l.label}</a>`
        ).join('');
        return `
            <div class="pub-card">
                <span class="pub-type">${pub.type}</span>
                <p class="pub-title">${pub.title}</p>
                ${pub.authors ? `<p class="pub-authors">${pub.authors}</p>` : ''}
                ${pub.venue ? `<p class="pub-venue">${pub.venue}</p>` : ''}
                ${pub.abstract ? `<p class="pub-abstract">${pub.abstract}</p>` : ''}
                ${links ? `<div class="pub-links">${links}</div>` : ''}
            </div>`;
    }).join('');

    return items;
}

function summarizeOutputs(tag) {
    const counts = { papers: 0, theses: 0, repos: 0, presentations: 0 };
    getPublications({ tags: [tag] }).forEach(pub => {
        if (pub.type === 'Conference Presentation') counts.presentations++;
        else if (pub.type === 'PhD Dissertation') counts.theses++;
        else if (pub.type === 'GitHub Repository') counts.repos++;
        else counts.papers++;
    });

    const parts = [];
    if (counts.papers) parts.push(`${counts.papers}&nbsp;paper${counts.papers > 1 ? 's' : ''}`);
    if (counts.theses) parts.push(`${counts.theses}&nbsp;PhD&nbsp;thesis`);
    if (counts.repos) parts.push(`${counts.repos}&nbsp;GitHub&nbsp;repositor${counts.repos > 1 ? 'ies' : 'y'}`);
    if (counts.presentations) parts.push(`${counts.presentations}&nbsp;conference&nbsp;presentation${counts.presentations > 1 ? 's' : ''}`);
    return parts.join('<br>');
}
