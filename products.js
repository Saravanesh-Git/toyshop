// 2) DOM handles
const els = {
  category: document.getElementById('category'),
  search: document.getElementById('search'),
  grid: document.getElementById('grid'),
  count: document.getElementById('count'),
  empty: document.getElementById('empty')
};

let ALL = [];
let FILTERED = [];

// 3) Card factory (unchanged)
function createCard(p) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'big.html?id=' + encodeURIComponent(p.id);
  a.setAttribute('aria-label', p.name);

  const fig = document.createElement('figure');
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.name;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.onerror = () => { img.src = 'assets/placeholder.webp'; };
  fig.appendChild(img);

  const body = document.createElement('div');
  body.className = 'body';

  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = p.name || 'Unnamed';

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = p.category || '';

  const btn = document.createElement('div');
  btn.className = 'btn';
  btn.textContent = 'View';

  body.appendChild(name);
  body.appendChild(meta);
  body.appendChild(btn);

  a.appendChild(fig);
  a.appendChild(body);
  return a;
}

// 4) Render and filters
function render() {
  els.grid.innerHTML = '';
  FILTERED.forEach(p => els.grid.appendChild(createCard(p)));
  els.count.textContent = FILTERED.length + ' items';
  els.empty.style.display = FILTERED.length ? 'none' : 'block';
}

function applyFilters() {
  const q = els.search.value.trim().toLowerCase();
  const cat = els.category.value;
  FILTERED = ALL.filter(p => {
    const matchesCat = cat ? p.category === cat : true;
    const matchesQ = q ? (p.name || '').toLowerCase().includes(q) : true;
    return matchesCat && matchesQ;
  });
  render();
}

// 5) Init - fetch data from external JSON file
async function init() {
  try {
    const res = await fetch('data/catalog.json', { cache: 'no-store' });
    const data = await res.json();

    ALL = data.map(p => ({
      id: String(p.id),
      category: p.category || '',
      name: p.name || '',
      image: p.image || 'assets/placeholder.webp'
    }));

    FILTERED = ALL.slice();
    render();

    els.category.addEventListener('change', applyFilters);
    els.search.addEventListener('input', applyFilters);
  } catch (e) {
    els.empty.style.display = 'block';
    els.empty.textContent = 'Failed to load products.';
    console.error(e);
  }
}

init();
