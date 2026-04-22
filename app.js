const grid = document.getElementById('grid');
styles.forEach(s => {
  const div = document.createElement('div');
  div.className='card';
  div.innerHTML = `<h3>${s.name}</h3><img src="${s.image}"/><div class='prompt'>${s.prompt}</div><small>${s.category}</small>`;
  grid.appendChild(div);
});