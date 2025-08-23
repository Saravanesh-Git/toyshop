// Replace with fetching from catalog.json if needed!
const products = [
  { image: 'products/vinayagar/images/IMG-20250822-WA0016.jpg', name: '' },
  { image: 'products/vinayagar/images/IMG-20250822-WA0017.jpg', name: '' }
  // Add your real products here!
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
    progress.textContent = `Product ${index + 1} of ${products.length}`;
    info.textContent = '';
    img.style.display = '';
    input.style.display = '';
    document.getElementById('save-btn').style.display = '';
    document.getElementById('next-btn').style.display = '';
  } else {
    // End of list
    img.style.display = 'none';
    input.style.display = 'none';
    document.getElementById('save-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    progress.textContent = 'Labeling complete!';
  }
}

document.getElementById('save-btn').onclick = function() {
  products[index].name = document.getElementById('label-input').value;
  document.getElementById('info').textContent = 'Label saved!';
};

document.getElementById('next-btn').onclick = function() {
  if (index < products.length - 1) {
    index++;
    render();
  }
};

document.getElementById('export-btn').onclick = function() {
  // Download the labeled products array as catalog.json
  const json = JSON.stringify(products, null, 2);
  const blob = new Blob([json], {type: 'application/json'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'catalog.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  document.getElementById('info').textContent = 'JSON exported!';
};

// Save on enter key
document.getElementById('label-input').addEventListener('keydown', function(e){
  if (e.key === 'Enter') {
    document.getElementById('save-btn').click();
  }
});

// Initial render
render();
