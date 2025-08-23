// Sample product list—load this from JSON (“catalog.json”) in real use.
const products = [
  { image: 'products/vinayagar/images/IMG-20250822-WA0001.jpg', name: '' },
  { image: 'products/golu-set/images/IMG-20250822-WA0155.jpg', name: '' }
  // ... all products, up to 347
];

let index = 0;

function render() {
  const img = document.getElementById('product-image');
  const input = document.getElementById('label-input');
  const progress = document.getElementById('progress');
  const info = document.getElementById('info');

  if (index < products.length) {
    img.src = products[index].image;
    input.value = products[index].name || '';
    progress.textContent = `Product ${index+1} of ${products.length}`;
    info.textContent = '';
  } else {
    img.style.display = 'none';
    input.style.display = 'none';
    document.getElementById('save-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    progress.textContent = 'Labeling complete!';
    info.textContent = '';
  }
}

// Save label
document.getElementById('save-btn').onclick = function() {
  const value = document.getElementById('label-input').value;
  products[index].name = value;
  document.getElementById('info').textContent = 'Label saved!';
};

// Next image
document.getElementById('next-btn').onclick = function() {
  if (index < products.length - 1) {
    index++;
    render();
  } else {
    render();
  }
};

// On enter key, save label
document.getElementById('label-input').addEventListener('keydown', function(e){
  if (e.key === 'Enter') {
    document.getElementById('save-btn').click();
  }
});

// Initial render
render();
