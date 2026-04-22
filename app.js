const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
const search = document.getElementById('search');
const stats = document.getElementById('stats');

let activeCategory = null;
let activeQuery = '';

function renderStats() {
  stats.innerText = `${styles.length} styles • ${categories.length} categories`;
}

function renderFilters() {
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.innerText = cat;
    btn.onclick = () => {
      activeCategory = cat;
      renderGrid();
    };
    filters.appendChild(btn);
  });
}

function renderGrid() {
  grid.innerHTML = '';

  styles
    .filter(s => !activeCategory || s.category === activeCategory)
    .filter(s => s.name.toLowerCase().includes(activeQuery))
    .forEach(s => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <a href="detail.html?slug=${s.slug}">
          <img src="${s.image}" />
          <h3>${s.name}</h3>
        </a>
        <small>${s.category}</small>
      `;
      grid.appendChild(div);
    });
}

search.addEventListener('input', e => {
  activeQuery = e.target.value.toLowerCase();
  renderGrid();
});

renderStats();
renderFilters();
renderGrid();