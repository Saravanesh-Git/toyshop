// Initial catalog array (replace or load from catalog.json)
const catalogKey = 'productCatalogLocalStorage';
let products = [
  { id: 'vinayagar/IMG-20250822-WA0016.jpg', category: 'Vinayagar', name: '', image: 'products/vinayagar/images/IMG-20250822-WA0016.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0017.jpg', category: 'Golu Set', name: '', image: 'products/vinayagar/images/IMG-20250822-WA0017.jpg' }
  // Add all products here or load dynamically
];

// Load saved catalog from localStorage (if any)
function loadFromLocalStorage() {
  const saved = localStorage.getItem(catalogKey);
  if (saved) {
    try {
      const savedProducts = JSON.parse(saved);
      // Sync saved names on existing products by matching id
      products.forEach(prod => {
        const savedProd = savedProducts.find(sp => sp.id === prod.id);
        if (savedProd && savedProd.name) {
          prod.name = savedProd.name;
        }
      });
    } catch(e) {
      console.error('Failed to load catalog from localStorage', e);
    }
  }
}

// Save catalog with labels to localStorage
function saveToLocalStorage() {
  localStorage.setItem(catalogKey, JSON.stringify(products));
}

let index = 0;

// Render current product image and label
function render() {
  const img = document.getElementById('product-image');
  const input = document.getElementById('label-input');
  const progress = document.getElementById('progress');
  const info = document.getElementById('info');

  if (index < products.length) {
    img.src = products[index].image;
    input.value = products[index].name || '';
    progress.textContent = `Product ${index + 1} of ${products.length}`;
    info.textContent = '';
    img.style.display = '';
    input.style.display = '';
    document.getElementById('save-btn').style.display = '';
    document.getElementById('next-btn').style.display = '';
  } else {
    img.style.display = 'none';
    input.style.display = 'none';
    document.getElementById('save-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    progress.textContent = 'Labeling complete!';
  }
}

// Save button clicked - save name locally
document.getElementById('save-btn').onclick = function() {
  const input = document.getElementById('label-input');
  products[index].name = input.value.trim();
  saveToLocalStorage();
  document.getElementById('info').textContent = 'Label saved locally!';
};

// Next button clicked - go to next product
document.getElementById('next-btn').onclick = function() {
  if (index < products.length - 1) {
    index++;
    render();
  }
};

// Export button clicked - download product catalog JSON with all fields
document.getElementById('export-btn').onclick = function() {
  // Save current input before exporting
  const input = document.getElementById('label-input');
  products[index].name = input.value.trim();
  saveToLocalStorage();

  const json = JSON.stringify(products, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'catalog.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  document.getElementById('info').textContent = 'Catalog exported as catalog.json!';
};

// Save label on Enter key pressed
document.getElementById('label-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('save-btn').click();
  }
});

// Initial setup: load saved data and render first product
loadFromLocalStorage();
render();
