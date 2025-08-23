(async function() {
  // Utility to get 'id' param from URL
  function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  // Fetch catalog.json containing full product data
  async function fetchCatalog() {
    try {
      const res = await fetch('data/catalog.json', {cache: 'no-store'});
      if (!res.ok) throw new Error('Failed to load catalog.json');
      return await res.json();
    } catch(e) {
      console.error(e);
      return [];
    }
  }

  function showModal(product) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.getElementById('close-btn');

    modal.style.display = 'flex';
    modalImg.src = product.image;
    modalImg.alt = product.name;
    caption.textContent = `${product.name} (${product.category})`;

    closeBtn.onclick = () => {
      modal.style.display = 'none';
      window.history.pushState({}, '', window.location.pathname);
    };

    // Close modal on clicking outside image
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        window.history.pushState({}, '', window.location.pathname);
      }
    };
  }

  // Main logic
  const id = getIdFromUrl();
  if (!id) {
    alert('No product id specified in URL');
    return;
  }

  const catalog = await fetchCatalog();
  const product = catalog.find(p => p.id === id);
  if (!product) {
    alert('Product not found');
    return;
  }

  showModal(product);
})();
