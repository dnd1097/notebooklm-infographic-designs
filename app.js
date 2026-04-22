const grid = document.getElementById('grid');
const filters = document.getElementById('filters');

function renderFilters() {
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.innerText = cat;
    btn.onclick = () => renderGrid(cat);
    filters.appendChild(btn);
  });
}

function renderGrid(filter) {
  grid.innerHTML = '';
  styles
    .filter(s => !filter || s.category === filter)
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

renderFilters();
renderGrid();