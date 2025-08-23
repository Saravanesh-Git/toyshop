// Example catalog array; load this from catalog.json via fetch if needed!
const catalog = [
  { id: 'vinayagar/IMG-20250822-WA0001.jpg', category: 'Vinayagar', name: '', image: 'products/vinayagar/images/IMG-20250822-WA0001.jpg' },
  { id: 'golu-set/IMG-20250822-WA0155.jpg', category: 'Golu Set', name: '', image: 'products/golu-set/images/IMG-20250822-WA0155.jpg' }
  // ... add or load up to 347 products here
];

let index = 0;

// Render current image and label
function renderImage() {
  const imgEl = document.getElementById('product-image');
  const labelInput = document.getElementById('label-input');
  const progress = document.getElementById('progress');

  if (index < catalog.length) {
    imgEl.src = catalog[index].image;
    labelInput.value = catalog[index].name || '';
    progress.textContent = `Product ${index+1} of ${catalog.length}`;
  } else {
    imgEl.src = '';
    labelInput.value = '';
    progress.textContent = 'All products labeled!';
    document.getElementById('label-form').style.display = 'none';
  }
}

// Save label to array
document.getElementById('save-btn').onclick = function() {
  const labelInput = document.getElementById('label-input');
  catalog[index].name = labelInput.value;
  alert('Label saved!');
};

// Next image
document.getElementById('next-btn').onclick = function() {
  if (index < catalog.length - 1) {
    index++;
    renderImage();
  }
};

// Initial render
renderImage();
