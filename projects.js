/*
 * Shared project-card renderer. Reads the PROJECTS array (projects-data.js).
 * Depends on escapeHtml() from utils.js and summarizeOutputs() from
 * publications.js, so load utils.js, publications-data.js, publications.js
 * and projects-data.js before this script.
 *
 * research.html calls renderProjects('otherProjectList', { domain: null })
 * for projects outside any research domain, and countProjects(domain) for
 * the domain cards. Domain pages call
 * renderProjects('projectGrid', { domain: '<slug>', prefix: '../' }).
 */
function getProjects(domain) {
    return PROJECTS.filter(p => domain === null ? p.domains.length === 0 : p.domains.includes(domain));
}

function countProjects(domain) {
    const n = getProjects(domain).length;
    return `${n} project${n === 1 ? '' : 's'}`;
}

function renderProjects(containerId, { domain, prefix = '' }) {
    const container = document.getElementById(containerId);
    if (!container) return [];

    const items = getProjects(domain);
    container.innerHTML = items.map(p => {
        const tags = p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
        const label = p.status === 'ongoing' ? 'Ongoing' : 'Completed';
        return `
            <a href="${escapeHtml(prefix + p.url)}" class="project-card">
                <div class="project-card-bar"></div>
                <div class="project-card-body">
                    <div class="project-card-top">
                        <span class="project-status status-${escapeHtml(p.status)}">${label}</span>
                        <span class="project-years">${escapeHtml(p.years)}</span>
                    </div>
                    <p class="project-card-title">${escapeHtml(p.title)}</p>
                    <p class="project-card-desc">${escapeHtml(p.description)}</p>
                    <div class="tag-list" style="margin-bottom:1.1rem">${tags}</div>
                    <div class="project-card-footer">
                        <span class="project-card-stats">${summarizeOutputs(p.outputTag)}</span>
                        <span class="project-card-link">Read more →</span>
                    </div>
                </div>
            </a>`;
    }).join('');

    return items;
}
