import { loadStylesFromAssets } from './asset-loader.js';

const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
const categories = document.getElementById('categories');
const search = document.getElementById('search');
const sortOrder = document.getElementById('sortOrder');
const stats = document.getElementById('stats');
const refreshButton = document.getElementById('reloadLibrary');

let styles = [];
let activeCategory = 'All';
let activeTag = 'All';
let activeQuery = '';
let activeSort = 'title';

function getCategories() {
  return ['All', ...new Set(styles.map(style => style.category))];
}

function getTags() {
  return ['All', ...[...new Set(styles.flatMap(style => style.tags || []))].sort((a, b) => a.localeCompare(b))];
}

function renderStats() {
  const categories = getCategories().length - 1;
  stats.innerText = `${styles.length} styles • ${categories} categories`;
}

function renderFilters() {
  categories.innerHTML = '';
  filters.innerHTML = '';

  const categoryWrap = document.createElement('div');
  categoryWrap.className = 'filter-row category-row';
  getCategories().forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `chip ${activeCategory === cat ? 'active' : ''}`;
    btn.innerText = cat;
    btn.onclick = () => {
      activeCategory = cat;
      renderFilters();
      renderGrid();
    };
    categoryWrap.appendChild(btn);
  });
  categories.appendChild(categoryWrap);

  const tagWrap = document.createElement('div');
  tagWrap.className = 'tag-list';
  getTags().forEach(tag => {
    const btn = document.createElement('button');
    btn.className = `chip tag-chip ${activeTag === tag ? 'active' : ''}`;
    btn.innerText = tag === 'All' ? 'All Tags' : `#${tag}`;
    btn.onclick = () => {
      activeTag = tag;
      renderFilters();
      renderGrid();
    };
    tagWrap.appendChild(btn);
  });

  filters.appendChild(tagWrap);
}

function renderGrid() {
  grid.innerHTML = '';

  const visibleStyles = styles
    .filter(style => activeCategory === 'All' || style.category === activeCategory)
    .filter(style => activeTag === 'All' || (style.tags || []).includes(activeTag))
    .filter(style => style.name.toLowerCase().includes(activeQuery))
    .sort((a, b) => {
      if (activeSort === 'backgroundColor') {
        const colorA = a.backgroundColor || 'zzzzzz';
        const colorB = b.backgroundColor || 'zzzzzz';
        const colorCompare = colorA.localeCompare(colorB);
        if (colorCompare !== 0) return colorCompare;
      }

      return a.name.localeCompare(b.name);
    });

  visibleStyles.forEach(style => {
      const card = document.createElement('article');
      card.className = 'card';
      const previewMarkup = style.hasRenderedPreview
        ? `<img src="${style.image}" loading="lazy" decoding="async" fetchpriority="low" width="480" height="300" alt="${style.name}" />`
        : `
          <div class="card-placeholder">
            <div class="card-placeholder-label">Prompt Available</div>
            <h4>${style.name}</h4>
            <p>${(style.tags || []).slice(0, 3).join(' • ') || style.category}</p>
          </div>
        `;
      card.innerHTML = `
        <a href="detail.html?slug=${encodeURIComponent(style.slug)}" class="card-link">
          <div class="card-image-wrap">
            <span class="badge">${style.category}</span>
            ${previewMarkup}
          </div>
          <div class="card-body">
            <h3>${style.name}</h3>
            ${style.backgroundColor ? `<div class="color-meta"><span class="color-swatch" style="background:${style.backgroundColor}"></span><span>${style.backgroundColor}</span></div>` : ''}
            <p>${style.summary}${style.hasRenderedPreview ? '' : ' Preview pending.'}</p>
          </div>
        </a>
      `;
      grid.appendChild(card);
    });
}

async function initializeLibrary() {
  refreshButton.disabled = true;
  refreshButton.innerText = 'Loading...';

  try {
    styles = await loadStylesFromAssets();
    renderStats();
    renderFilters();
    renderGrid();
  } catch (error) {
    grid.innerHTML = '<p>Unable to load styles from assets. Please check prompts/images folders.</p>';
    console.error(error);
  } finally {
    refreshButton.disabled = false;
    refreshButton.innerText = 'Reload Library';
  }
}

search.addEventListener('input', event => {
  activeQuery = event.target.value.toLowerCase();
  renderGrid();
});

sortOrder.addEventListener('change', event => {
  activeSort = event.target.value;
  renderGrid();
});

refreshButton.addEventListener('click', initializeLibrary);

initializeLibrary();
