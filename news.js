/*
 * Shared news renderer. Reads the NEWS_ITEMS array (defined in news-data.js,
 * which must be loaded before this script), sorts newest-first, and renders
 * a slice into a container.
 * Homepage calls loadNews('newsList', { limit: 5 }) for the latest posts.
 * The archive page calls loadNews('newsArchiveList', { offset: 5 }) for the rest.
 */
function loadNews(containerId, { offset = 0, limit = Infinity, emptyMessage = 'No news items yet.' } = {}) {
    const container = document.getElementById(containerId);
    if (!container) return [];

    const items = [...NEWS_ITEMS].sort((a, b) => new Date(b.date) - new Date(a.date));
    const slice = items.slice(offset, offset + limit);

    if (slice.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">${emptyMessage}</p>`;
        return items;
    }

    container.innerHTML = slice.map(item => {
        const dateLabel = new Date(item.date).toLocaleDateString('en-US', {
            month: 'short', year: 'numeric', timeZone: 'UTC'
        });
        return `
            <div class="news-item">
                <p class="news-date">${dateLabel}</p>
                <div>
                    <span class="news-category">${item.category}</span>
                    <p class="news-title">${item.title}</p>
                    <p class="news-excerpt">${item.excerpt}</p>
                </div>
            </div>`;
    }).join('');

    return items;
}
