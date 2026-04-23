import { loadStylesFromAssets } from './asset-loader.js';

const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
const search = document.getElementById('search');
const stats = document.getElementById('stats');
const refreshButton = document.getElementById('reloadLibrary');

let styles = [];
let activeCategory = 'All';
let activeTag = 'All';
let activeQuery = '';

function getCategories() {
  return ['All', ...new Set(styles.map(style => style.category))];
}

function getTags() {
  return ['All', ...new Set(styles.flatMap(style => style.tags || []))];
}

function renderStats() {
  const categories = getCategories().length - 1;
  stats.innerText = `${styles.length} styles • ${categories} categories`;
}

function renderFilters() {
  filters.innerHTML = '';

  const categoryWrap = document.createElement('div');
  categoryWrap.className = 'filter-row';
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

  const tagWrap = document.createElement('div');
  tagWrap.className = 'filter-row';
  getTags().forEach(tag => {
    const btn = document.createElement('button');
    btn.className = `chip ${activeTag === tag ? 'active' : ''}`;
    btn.innerText = `#${tag}`;
    btn.onclick = () => {
      activeTag = tag;
      renderFilters();
      renderGrid();
    };
    tagWrap.appendChild(btn);
  });

  filters.appendChild(categoryWrap);
  filters.appendChild(tagWrap);
}

function renderGrid() {
  grid.innerHTML = '';

  styles
    .filter(style => activeCategory === 'All' || style.category === activeCategory)
    .filter(style => activeTag === 'All' || (style.tags || []).includes(activeTag))
    .filter(style => style.name.toLowerCase().includes(activeQuery))
    .forEach(style => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <a href="detail.html?slug=${encodeURIComponent(style.slug)}" class="card-link">
          <div class="card-image-wrap">
            <span class="badge">${style.category}</span>
            <img src="${style.image}" loading="lazy" alt="${style.name}" />
          </div>
          <div class="card-body">
            <h3>${style.name}</h3>
            <p>${style.summary}${style.hasImage ? '' : ' (image pending)'}</p>
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

refreshButton.addEventListener('click', initializeLibrary);

initializeLibrary();
