/*
 * Shared news renderer. Reads the NEWS_ITEMS array (defined in news-data.js,
 * which must be loaded before this script), sorts newest-first, and renders
 * a slice into a container. Depends on escapeHtml() from utils.js.
 * Homepage calls loadNews('newsList', { limit: 5 }) for the latest posts.
 * The archive page calls loadNews('newsArchiveList', { offset: 5 }) for the rest.
 */
function loadNews(containerId, { offset = 0, limit = Infinity, emptyMessage = 'No news items yet.' } = {}) {
    const container = document.getElementById(containerId);
    if (!container) return [];

    const items = [...NEWS_ITEMS].sort((a, b) => new Date(b.date) - new Date(a.date));
    const slice = items.slice(offset, offset + limit);

    if (slice.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">${escapeHtml(emptyMessage)}</p>`;
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
                    <span class="news-category">${escapeHtml(item.category)}</span>
                    <div class="news-body">
                        <div>
                            <p class="news-title">${escapeHtml(item.title)}</p>
                            <p class="news-excerpt">${escapeHtml(item.excerpt)}</p>
                        </div>
                        ${item.image ? `<button type="button" class="news-image" aria-label="View larger picture"><img src="${escapeHtml(item.image)}" alt="" loading="lazy"></button>` : ''}
                    </div>
                </div>
            </div>`;
    }).join('');

    container.onclick = e => {
        const img = e.target.closest('.news-image')?.querySelector('img');
        if (img) showNewsImage(img.src);
    };

    return items;
}

/* Shows a news picture enlarged; click anywhere or press Esc to close. */
function showNewsImage(src) {
    let dialog = document.getElementById('newsLightbox');
    if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.id = 'newsLightbox';
        dialog.className = 'news-lightbox';
        dialog.innerHTML = '<img alt="">';
        dialog.addEventListener('click', () => dialog.close());
        document.body.appendChild(dialog);
    }
    dialog.querySelector('img').src = src;
    dialog.showModal();
}
