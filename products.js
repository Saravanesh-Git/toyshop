const STUB = [];

for (let i = 16; i <= 61; i++) {
  const numStr = i.toString().padStart(4, '0');
  STUB.push({
    id: `vinayagar/IMG-20250822-WA${numStr}.jpg`,
    category: 'Vinayagar',
    name: `Vinayagar Toy ${i - 15}`,
    image: `products/vinayagar/images/IMG-20250822-WA${numStr}.jpg`
  });
}

for (let i = 18; i <= 298; i++) {
  const numStr = i.toString().padStart(4, '0');
  STUB.push({
    id: `golu-set/IMG-20250822-WA${numStr}.jpg`,
    category: 'Golu Set',
    name: `Golu Set Toy ${i - 17}`,
    image: `products/golu-set/images/IMG-20250822-WA${numStr}.jpg`
  });
}

const els = {
  category: document.getElementById('category'),
  search: document.getElementById('search'),
  grid: document.getElementById('grid'),
  count: document.getElementById('count'),
  empty: document.getElementById('empty')
};

let ALL = [];
let FILTERED = [];

function createCard(p) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'product.html?id=' + encodeURIComponent(p.id);
  a.setAttribute('aria-label', p.name);

  const fig = document.createElement('figure');
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.name;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.onerror = () => {
    img.src = 'assets/placeholder.webp';
  };
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

function render() {
  els.grid.innerHTML = '';
  FILTERED.forEach((p) => els.grid.appendChild(createCard(p)));
  els.count.textContent = FILTERED.length + ' items';
  els.empty.style.display = FILTERED.length ? 'none' : 'block';
}

function applyFilters() {
  const q = els.search.value.trim().toLowerCase();
  const cat = els.category.value;
  FILTERED = ALL.filter((p) => {
    const matchesCat = cat ? p.category === cat : true;
    const matchesQ = q ? (p.name || '').toLowerCase().includes(q) : true;
    return matchesCat && matchesQ;
  });
  render();
}

async function init() {
  try {
    // If you want to use the real data file later:
    // const res = await fetch('data/catalog.json', { cache: 'no-store' });
    // const data = await res.json();

    const data = STUB;

    ALL = data.map((p) => ({
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
