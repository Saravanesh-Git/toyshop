// products.js
// Mobile-first product grid for Products page
// - Uses explicit file list you provided (46 Vinayagar + 281 Golu Set = 327)
// - Keeps filter and search working
// - Later you can replace STUB with fetch('data/catalog.json') if desired

// 1) Explicit dataset (IDs = category/filename for stable links)
const STUB = [
  // Vinayagar (46)
  { id: 'vinayagar/IMG-20250822-WA0016.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 1', image: 'products/vinayagar/images/IMG-20250822-WA0016.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0017.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 2', image: 'products/vinayagar/images/IMG-20250822-WA0017.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0020.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 3', image: 'products/vinayagar/images/IMG-20250822-WA0020.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0036.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 4', image: 'products/vinayagar/images/IMG-20250822-WA0036.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0041.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 5', image: 'products/vinayagar/images/IMG-20250822-WA0041.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0089.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 6', image: 'products/vinayagar/images/IMG-20250822-WA0089.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0105.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 7', image: 'products/vinayagar/images/IMG-20250822-WA0105.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0106.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 8', image: 'products/vinayagar/images/IMG-20250822-WA0106.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0107.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 9', image: 'products/vinayagar/images/IMG-20250822-WA0107.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0122.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 10', image: 'products/vinayagar/images/IMG-20250822-WA0122.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0132.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 11', image: 'products/vinayagar/images/IMG-20250822-WA0132.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0133.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 12', image: 'products/vinayagar/images/IMG-20250822-WA0133.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0134.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 13', image: 'products/vinayagar/images/IMG-20250822-WA0134.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0143.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 14', image: 'products/vinayagar/images/IMG-20250822-WA0143.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0145.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 15', image: 'products/vinayagar/images/IMG-20250822-WA0145.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0161.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 16', image: 'products/vinayagar/images/IMG-20250822-WA0161.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0172.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 17', image: 'products/vinayagar/images/IMG-20250822-WA0172.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0173.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 18', image: 'products/vinayagar/images/IMG-20250822-WA0173.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0179.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 19', image: 'products/vinayagar/images/IMG-20250822-WA0179.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0182.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 20', image: 'products/vinayagar/images/IMG-20250822-WA0182.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0192.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 21', image: 'products/vinayagar/images/IMG-20250822-WA0192.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0197.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 22', image: 'products/vinayagar/images/IMG-20250822-WA0197.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0201.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 23', image: 'products/vinayagar/images/IMG-20250822-WA0201.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0209.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 24', image: 'products/vinayagar/images/IMG-20250822-WA0209.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0214.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 25', image: 'products/vinayagar/images/IMG-20250822-WA0214.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0220.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 26', image: 'products/vinayagar/images/IMG-20250822-WA0220.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0243.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 27', image: 'products/vinayagar/images/IMG-20250822-WA0243.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0248.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 28', image: 'products/vinayagar/images/IMG-20250822-WA0248.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0256.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 29', image: 'products/vinayagar/images/IMG-20250822-WA0256.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0257.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 30', image: 'products/vinayagar/images/IMG-20250822-WA0257.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0262.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 31', image: 'products/vinayagar/images/IMG-20250822-WA0262.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0267.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 32', image: 'products/vinayagar/images/IMG-20250822-WA0267.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0269.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 33', image: 'products/vinayagar/images/IMG-20250822-WA0269.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0270.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 34', image: 'products/vinayagar/images/IMG-20250822-WA0270.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0279.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 35', image: 'products/vinayagar/images/IMG-20250822-WA0279.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0284.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 36', image: 'products/vinayagar/images/IMG-20250822-WA0284.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0297.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 37', image: 'products/vinayagar/images/IMG-20250822-WA0297.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0298.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 38', image: 'products/vinayagar/images/IMG-20250822-WA0298.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0305.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 39', image: 'products/vinayagar/images/IMG-20250822-WA0305.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0307.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 40', image: 'products/vinayagar/images/IMG-20250822-WA0307.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0308.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 41', image: 'products/vinayagar/images/IMG-20250822-WA0308.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0316.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 42', image: 'products/vinayagar/images/IMG-20250822-WA0316.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0321.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 43', image: 'products/vinayagar/images/IMG-20250822-WA0321.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0324.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 44', image: 'products/vinayagar/images/IMG-20250822-WA0324.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0327.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 45', image: 'products/vinayagar/images/IMG-20250822-WA0327.jpg' },
  { id: 'vinayagar/IMG-20250822-WA0342.jpg', category: 'Vinayagar', name: 'Vinayagar Toy 46', image: 'products/vinayagar/images/IMG-20250822-WA0342.jpg' },

  // Golu Set (281)
  { id: 'golu-set/IMG-20250822-WA0018.jpg', category: 'Golu Set', name: 'Golu Set Toy 1', image: 'products/golu-set/images/IMG-20250822-WA0018.jpg' },
  { id: 'golu-set/IMG-20250822-WA0019.jpg', category: 'Golu Set', name: 'Golu Set Toy 2', image: 'products/golu-set/images/IMG-20250822-WA0019.jpg' },
  { id: 'golu-set/IMG-20250822-WA0021.jpg', category: 'Golu Set', name: 'Golu Set Toy 3', image: 'products/golu-set/images/IMG-20250822-WA0021.jpg' },
  { id: 'golu-set/IMG-20250822-WA0022.jpg', category: 'Golu Set', name: 'Golu Set Toy 4', image: 'products/golu-set/images/IMG-20250822-WA0022.jpg' },
  { id: 'golu-set/IMG-20250822-WA0023.jpg', category: 'Golu Set', name: 'Golu Set Toy 5', image: 'products/golu-set/images/IMG-20250822-WA0023.jpg' },
  { id: 'golu-set/IMG-20250822-WA0024.jpg', category: 'Golu Set', name: 'Golu Set Toy 6', image: 'products/golu-set/images/IMG-20250822-WA0024.jpg' },
  { id: 'golu-set/IMG-20250822-WA0025.jpg', category: 'Golu Set', name: 'Golu Set Toy 7', image: 'products/golu-set/images/IMG-20250822-WA0025.jpg' },
  { id: 'golu-set/IMG-20250822-WA0026.jpg', category: 'Golu Set', name: 'Golu Set Toy 8', image: 'products/golu-set/images/IMG-20250822-WA0026.jpg' },
  { id: 'golu-set/IMG-20250822-WA0027.jpg', category: 'Golu Set', name: 'Golu Set Toy 9', image: 'products/golu-set/images/IMG-20250822-WA0027.jpg' },
  { id: 'golu-set/IMG-20250822-WA0028.jpg', category: 'Golu Set', name: 'Golu Set Toy 10', image: 'products/golu-set/images/IMG-20250822-WA0028.jpg' },
  { id: 'golu-set/IMG-20250822-WA0029.jpg', category: 'Golu Set', name: 'Golu Set Toy 11', image: 'products/golu-set/images/IMG-20250822-WA0029.jpg' },
  { id: 'golu-set/IMG-20250822-WA0030.jpg', category: 'Golu Set', name: 'Golu Set Toy 12', image: 'products/golu-set/images/IMG-20250822-WA0030.jpg' },
  { id: 'golu-set/IMG-20250822-WA0031.jpg', category: 'Golu Set', name: 'Golu Set Toy 13', image: 'products/golu-set/images/IMG-20250822-WA0031.jpg' },
  { id: 'golu-set/IMG-20250822-WA0032.jpg', category: 'Golu Set', name: 'Golu Set Toy 14', image: 'products/golu-set/images/IMG-20250822-WA0032.jpg' },
  { id: 'golu-set/IMG-20250822-WA0033.jpg', category: 'Golu Set', name: 'Golu Set Toy 15', image: 'products/golu-set/images/IMG-20250822-WA0033.jpg' },
  { id: 'golu-set/IMG-20250822-WA0034.jpg', category: 'Golu Set', name: 'Golu Set Toy 16', image: 'products/golu-set/images/IMG-20250822-WA0034.jpg' },
  { id: 'golu-set/IMG-20250822-WA0035.jpg', category: 'Golu Set', name: 'Golu Set Toy 17', image: 'products/golu-set/images/IMG-20250822-WA0035.jpg' },
  { id: 'golu-set/IMG-20250822-WA0037.jpg', category: 'Golu Set', name: 'Golu Set Toy 18', image: 'products/golu-set/images/IMG-20250822-WA0037.jpg' },
  { id: 'golu-set/IMG-20250822-WA0038.jpg', category: 'Golu Set', name: 'Golu Set Toy 19', image: 'products/golu-set/images/IMG-20250822-WA0038.jpg' },
  { id: 'golu-set/IMG-20250822-WA0039.jpg', category: 'Golu Set', name: 'Golu Set Toy 20', image: 'products/golu-set/images/IMG-20250822-WA0039.jpg' },
  { id: 'golu-set/IMG-20250822-WA0040.jpg', category: 'Golu Set', name: 'Golu Set Toy 21', image: 'products/golu-set/images/IMG-20250822-WA0040.jpg' },
{ id: 'golu-set/IMG-20250822-WA0042.jpg', category: 'Golu Set', name: 'Golu Set Toy 22', image: 'products/golu-set/images/IMG-20250822-WA0042.jpg' },
{ id: 'golu-set/IMG-20250822-WA0043.jpg', category: 'Golu Set', name: 'Golu Set Toy 23', image: 'products/golu-set/images/IMG-20250822-WA0043.jpg' },
{ id: 'golu-set/IMG-20250822-WA0044.jpg', category: 'Golu Set', name: 'Golu Set Toy 24', image: 'products/golu-set/images/IMG-20250822-WA0044.jpg' },
{ id: 'golu-set/IMG-20250822-WA0045.jpg', category: 'Golu Set', name: 'Golu Set Toy 25', image: 'products/golu-set/images/IMG-20250822-WA0045.jpg' },
{ id: 'golu-set/IMG-20250822-WA0046.jpg', category: 'Golu Set', name: 'Golu Set Toy 26', image: 'products/golu-set/images/IMG-20250822-WA0046.jpg' },
{ id: 'golu-set/IMG-20250822-WA0047.jpg', category: 'Golu Set', name: 'Golu Set Toy 27', image: 'products/golu-set/images/IMG-20250822-WA0047.jpg' },
{ id: 'golu-set/IMG-20250822-WA0048.jpg', category: 'Golu Set', name: 'Golu Set Toy 28', image: 'products/golu-set/images/IMG-20250822-WA0048.jpg' },
{ id: 'golu-set/IMG-20250822-WA0049.jpg', category: 'Golu Set', name: 'Golu Set Toy 29', image: 'products/golu-set/images/IMG-20250822-WA0049.jpg' },
{ id: 'golu-set/IMG-20250822-WA0050.jpg', category: 'Golu Set', name: 'Golu Set Toy 30', image: 'products/golu-set/images/IMG-20250822-WA0050.jpg' },
{ id: 'golu-set/IMG-20250822-WA0051.jpg', category: 'Golu Set', name: 'Golu Set Toy 31', image: 'products/golu-set/images/IMG-20250822-WA0051.jpg' },
{ id: 'golu-set/IMG-20250822-WA0052.jpg', category: 'Golu Set', name: 'Golu Set Toy 32', image: 'products/golu-set/images/IMG-20250822-WA0052.jpg' },
{ id: 'golu-set/IMG-20250822-WA0053.jpg', category: 'Golu Set', name: 'Golu Set Toy 33', image: 'products/golu-set/images/IMG-20250822-WA0053.jpg' },
{ id: 'golu-set/IMG-20250822-WA0054.jpg', category: 'Golu Set', name: 'Golu Set Toy 34', image: 'products/golu-set/images/IMG-20250822-WA0054.jpg' },
{ id: 'golu-set/IMG-20250822-WA0055.jpg', category: 'Golu Set', name: 'Golu Set Toy 35', image: 'products/golu-set/images/IMG-20250822-WA0055.jpg' },
{ id: 'golu-set/IMG-20250822-WA0056.jpg', category: 'Golu Set', name: 'Golu Set Toy 36', image: 'products/golu-set/images/IMG-20250822-WA0056.jpg' },
{ id: 'golu-set/IMG-20250822-WA0057.jpg', category: 'Golu Set', name: 'Golu Set Toy 37', image: 'products/golu-set/images/IMG-20250822-WA0057.jpg' },
{ id: 'golu-set/IMG-20250822-WA0058.jpg', category: 'Golu Set', name: 'Golu Set Toy 38', image: 'products/golu-set/images/IMG-20250822-WA0058.jpg' },
{ id: 'golu-set/IMG-20250822-WA0059.jpg', category: 'Golu Set', name: 'Golu Set Toy 39', image: 'products/golu-set/images/IMG-20250822-WA0059.jpg' },
{ id: 'golu-set/IMG-20250822-WA0060.jpg', category: 'Golu Set', name: 'Golu Set Toy 40', image: 'products/golu-set/images/IMG-20250822-WA0060.jpg' },
{ id: 'golu-set/IMG-20250822-WA0061.jpg', category: 'Golu Set', name: 'Golu Set Toy 41', image: 'products/golu-set/images/IMG-20250822-WA0061.jpg' },
{ id: 'golu-set/IMG-20250822-WA0062.jpg', category: 'Golu Set', name: 'Golu Set Toy 42', image: 'products/golu-set/images/IMG-20250822-WA0062.jpg' },
{ id: 'golu-set/IMG-20250822-WA0063.jpg', category: 'Golu Set', name: 'Golu Set Toy 43', image: 'products/golu-set/images/IMG-20250822-WA0063.jpg' },
{ id: 'golu-set/IMG-20250822-WA0064.jpg', category: 'Golu Set', name: 'Golu Set Toy 44', image: 'products/golu-set/images/IMG-20250822-WA0064.jpg' },
{ id: 'golu-set/IMG-20250822-WA0065.jpg', category: 'Golu Set', name: 'Golu Set Toy 45', image: 'products/golu-set/images/IMG-20250822-WA0065.jpg' },
{ id: 'golu-set/IMG-20250822-WA0066.jpg', category: 'Golu Set', name: 'Golu Set Toy 46', image: 'products/golu-set/images/IMG-20250822-WA0066.jpg' },
{ id: 'golu-set/IMG-20250822-WA0067.jpg', category: 'Golu Set', name: 'Golu Set Toy 47', image: 'products/golu-set/images/IMG-20250822-WA0067.jpg' },
{ id: 'golu-set/IMG-20250822-WA0068.jpg', category: 'Golu Set', name: 'Golu Set Toy 48', image: 'products/golu-set/images/IMG-20250822-WA0068.jpg' },
{ id: 'golu-set/IMG-20250822-WA0069.jpg', category: 'Golu Set', name: 'Golu Set Toy 49', image: 'products/golu-set/images/IMG-20250822-WA0069.jpg' },
{ id: 'golu-set/IMG-20250822-WA0070.jpg', category: 'Golu Set', name: 'Golu Set Toy 50', image: 'products/golu-set/images/IMG-20250822-WA0070.jpg' },
{ id: 'golu-set/IMG-20250822-WA0071.jpg', category: 'Golu Set', name: 'Golu Set Toy 51', image: 'products/golu-set/images/IMG-20250822-WA0071.jpg' },
{ id: 'golu-set/IMG-20250822-WA0072.jpg', category: 'Golu Set', name: 'Golu Set Toy 52', image: 'products/golu-set/images/IMG-20250822-WA0072.jpg' },
{ id: 'golu-set/IMG-20250822-WA0073.jpg', category: 'Golu Set', name: 'Golu Set Toy 53', image: 'products/golu-set/images/IMG-20250822-WA0073.jpg' },
{ id: 'golu-set/IMG-20250822-WA0074.jpg', category: 'Golu Set', name: 'Golu Set Toy 54', image: 'products/golu-set/images/IMG-20250822-WA0074.jpg' },
{ id: 'golu-set/IMG-20250822-WA0075.jpg', category: 'Golu Set', name: 'Golu Set Toy 55', image: 'products/golu-set/images/IMG-20250822-WA0075.jpg' },
{ id: 'golu-set/IMG-20250822-WA0076.jpg', category: 'Golu Set', name: 'Golu Set Toy 56', image: 'products/golu-set/images/IMG-20250822-WA0076.jpg' },
{ id: 'golu-set/IMG-20250822-WA0077.jpg', category: 'Golu Set', name: 'Golu Set Toy 57', image: 'products/golu-set/images/IMG-20250822-WA0077.jpg' },
{ id: 'golu-set/IMG-20250822-WA0078.jpg', category: 'Golu Set', name: 'Golu Set Toy 58', image: 'products/golu-set/images/IMG-20250822-WA0078.jpg' },
{ id: 'golu-set/IMG-20250822-WA0079.jpg', category: 'Golu Set', name: 'Golu Set Toy 59', image: 'products/golu-set/images/IMG-20250822-WA0079.jpg' },
{ id: 'golu-set/IMG-20250822-WA0080.jpg', category: 'Golu Set', name: 'Golu Set Toy 60', image: 'products/golu-set/images/IMG-20250822-WA0080.jpg' },
{ id: 'golu-set/IMG-20250822-WA0081.jpg', category: 'Golu Set', name: 'Golu Set Toy 61', image: 'products/golu-set/images/IMG-20250822-WA0081.jpg' },
  { id: 'golu-set/IMG-20250822-WA0082.jpg', category: 'Golu Set', name: 'Golu Set Toy 62', image: 'products/golu-set/images/IMG-20250822-WA0082.jpg' },
  { id: 'golu-set/IMG-20250822-WA0083.jpg', category: 'Golu Set', name: 'Golu Set Toy 63', image: 'products/golu-set/images/IMG-20250822-WA0083.jpg' },
  { id: 'golu-set/IMG-20250822-WA0084.jpg', category: 'Golu Set', name: 'Golu Set Toy 64', image: 'products/golu-set/images/IMG-20250822-WA0084.jpg' },
  { id: 'golu-set/IMG-20250822-WA0085.jpg', category: 'Golu Set', name: 'Golu Set Toy 65', image: 'products/golu-set/images/IMG-20250822-WA0085.jpg' },
  { id: 'golu-set/IMG-20250822-WA0086.jpg', category: 'Golu Set', name: 'Golu Set Toy 66', image: 'products/golu-set/images/IMG-20250822-WA0086.jpg' },
  { id: 'golu-set/IMG-20250822-WA0087.jpg', category: 'Golu Set', name: 'Golu Set Toy 67', image: 'products/golu-set/images/IMG-20250822-WA0087.jpg' },
  { id: 'golu-set/IMG-20250822-WA0088.jpg', category: 'Golu Set', name: 'Golu Set Toy 68', image: 'products/golu-set/images/IMG-20250822-WA0088.jpg' },
  { id: 'golu-set/IMG-20250822-WA0089.jpg', category: 'Golu Set', name: 'Golu Set Toy 69', image: 'products/golu-set/images/IMG-20250822-WA0089.jpg' },
  { id: 'golu-set/IMG-20250822-WA0090.jpg', category: 'Golu Set', name: 'Golu Set Toy 70', image: 'products/golu-set/images/IMG-20250822-WA0090.jpg' },
  { id: 'golu-set/IMG-20250822-WA0091.jpg', category: 'Golu Set', name: 'Golu Set Toy 71', image: 'products/golu-set/images/IMG-20250822-WA0091.jpg' },
  { id: 'golu-set/IMG-20250822-WA0092.jpg', category: 'Golu Set', name: 'Golu Set Toy 72', image: 'products/golu-set/images/IMG-20250822-WA0092.jpg' },
  { id: 'golu-set/IMG-20250822-WA0093.jpg', category: 'Golu Set', name: 'Golu Set Toy 73', image: 'products/golu-set/images/IMG-20250822-WA0093.jpg' },
  { id: 'golu-set/IMG-20250822-WA0094.jpg', category: 'Golu Set', name: 'Golu Set Toy 74', image: 'products/golu-set/images/IMG-20250822-WA0094.jpg' },
  { id: 'golu-set/IMG-20250822-WA0095.jpg', category: 'Golu Set', name: 'Golu Set Toy 75', image: 'products/golu-set/images/IMG-20250822-WA0095.jpg' },
  { id: 'golu-set/IMG-20250822-WA0096.jpg', category: 'Golu Set', name: 'Golu Set Toy 76', image: 'products/golu-set/images/IMG-20250822-WA0096.jpg' },
  { id: 'golu-set/IMG-20250822-WA0097.jpg', category: 'Golu Set', name: 'Golu Set Toy 77', image: 'products/golu-set/images/IMG-20250822-WA0097.jpg' },
  { id: 'golu-set/IMG-20250822-WA0098.jpg', category: 'Golu Set', name: 'Golu Set Toy 78', image: 'products/golu-set/images/IMG-20250822-WA0098.jpg' },
  { id: 'golu-set/IMG-20250822-WA0099.jpg', category: 'Golu Set', name: 'Golu Set Toy 79', image: 'products/golu-set/images/IMG-20250822-WA0099.jpg' },
  { id: 'golu-set/IMG-20250822-WA0100.jpg', category: 'Golu Set', name: 'Golu Set Toy 80', image: 'products/golu-set/images/IMG-20250822-WA0100.jpg' },
  { id: 'golu-set/IMG-20250822-WA0101.jpg', category: 'Golu Set', name: 'Golu Set Toy 81', image: 'products/golu-set/images/IMG-20250822-WA0101.jpg' },
  { id: 'golu-set/IMG-20250822-WA0102.jpg', category: 'Golu Set', name: 'Golu Set Toy 82', image: 'products/golu-set/images/IMG-20250822-WA0102.jpg' },
  { id: 'golu-set/IMG-20250822-WA0103.jpg', category: 'Golu Set', name: 'Golu Set Toy 83', image: 'products/golu-set/images/IMG-20250822-WA0103.jpg' },
  { id: 'golu-set/IMG-20250822-WA0104.jpg', category: 'Golu Set', name: 'Golu Set Toy 84', image: 'products/golu-set/images/IMG-20250822-WA0104.jpg' },
  { id: 'golu-set/IMG-20250822-WA0105.jpg', category: 'Golu Set', name: 'Golu Set Toy 85', image: 'products/golu-set/images/IMG-20250822-WA0105.jpg' },
  { id: 'golu-set/IMG-20250822-WA0106.jpg', category: 'Golu Set', name: 'Golu Set Toy 86', image: 'products/golu-set/images/IMG-20250822-WA0106.jpg' },
  { id: 'golu-set/IMG-20250822-WA0107.jpg', category: 'Golu Set', name: 'Golu Set Toy 87', image: 'products/golu-set/images/IMG-20250822-WA0107.jpg' },
  { id: 'golu-set/IMG-20250822-WA0108.jpg', category: 'Golu Set', name: 'Golu Set Toy 88', image: 'products/golu-set/images/IMG-20250822-WA0108.jpg' },
  { id: 'golu-set/IMG-20250822-WA0109.jpg', category: 'Golu Set', name: 'Golu Set Toy 89', image: 'products/golu-set/images/IMG-20250822-WA0109.jpg' },
  { id: 'golu-set/IMG-20250822-WA0110.jpg', category: 'Golu Set', name: 'Golu Set Toy 90', image: 'products/golu-set/images/IMG-20250822-WA0110.jpg' },
  { id: 'golu-set/IMG-20250822-WA0111.jpg', category: 'Golu Set', name: 'Golu Set Toy 91', image: 'products/golu-set/images/IMG-20250822-WA0111.jpg' },
  { id: 'golu-set/IMG-20250822-WA0112.jpg', category: 'Golu Set', name: 'Golu Set Toy 92', image: 'products/golu-set/images/IMG-20250822-WA0112.jpg' },
  { id: 'golu-set/IMG-20250822-WA0113.jpg', category: 'Golu Set', name: 'Golu Set Toy 93', image: 'products/golu-set/images/IMG-20250822-WA0113.jpg' },
  { id: 'golu-set/IMG-20250822-WA0114.jpg', category: 'Golu Set', name: 'Golu Set Toy 94', image: 'products/golu-set/images/IMG-20250822-WA0114.jpg' },
  { id: 'golu-set/IMG-20250822-WA0115.jpg', category: 'Golu Set', name: 'Golu Set Toy 95', image: 'products/golu-set/images/IMG-20250822-WA0115.jpg' },
  { id: 'golu-set/IMG-20250822-WA0116.jpg', category: 'Golu Set', name: 'Golu Set Toy 96', image: 'products/golu-set/images/IMG-20250822-WA0116.jpg' },
  { id: 'golu-set/IMG-20250822-WA0117.jpg', category: 'Golu Set', name: 'Golu Set Toy 97', image: 'products/golu-set/images/IMG-20250822-WA0117.jpg' },
  { id: 'golu-set/IMG-20250822-WA0118.jpg', category: 'Golu Set', name: 'Golu Set Toy 98', image: 'products/golu-set/images/IMG-20250822-WA0118.jpg' },
  { id: 'golu-set/IMG-20250822-WA0119.jpg', category: 'Golu Set', name: 'Golu Set Toy 99', image: 'products/golu-set/images/IMG-20250822-WA0119.jpg' },
  { id: 'golu-set/IMG-20250822-WA0120.jpg', category: 'Golu Set', name: 'Golu Set Toy 100', image: 'products/golu-set/images/IMG-20250822-WA0120.jpg' },
  { id: 'golu-set/IMG-20250822-WA0121.jpg', category: 'Golu Set', name: 'Golu Set Toy 101', image: 'products/golu-set/images/IMG-20250822-WA0121.jpg' },
  { id: 'golu-set/IMG-20250822-WA0122.jpg', category: 'Golu Set', name: 'Golu Set Toy 102', image: 'products/golu-set/images/IMG-20250822-WA0122.jpg' },

  { id: 'golu-set/IMG-20250822-WA0123.jpg', category: 'Golu Set', name: 'Golu Set Toy 103', image: 'products/golu-set/images/IMG-20250822-WA0123.jpg' },
  { id: 'golu-set/IMG-20250822-WA0124.jpg', category: 'Golu Set', name: 'Golu Set Toy 104', image: 'products/golu-set/images/IMG-20250822-WA0124.jpg' },
  { id: 'golu-set/IMG-20250822-WA0125.jpg', category: 'Golu Set', name: 'Golu Set Toy 105', image: 'products/golu-set/images/IMG-20250822-WA0125.jpg' },
  { id: 'golu-set/IMG-20250822-WA0126.jpg', category: 'Golu Set', name: 'Golu Set Toy 106', image: 'products/golu-set/images/IMG-20250822-WA0126.jpg' },
  { id: 'golu-set/IMG-20250822-WA0127.jpg', category: 'Golu Set', name: 'Golu Set Toy 107', image: 'products/golu-set/images/IMG-20250822-WA0127.jpg' },
  { id: 'golu-set/IMG-20250822-WA0128.jpg', category: 'Golu Set', name: 'Golu Set Toy 108', image: 'products/golu-set/images/IMG-20250822-WA0128.jpg' },
  { id: 'golu-set/IMG-20250822-WA0129.jpg', category: 'Golu Set', name: 'Golu Set Toy 109', image: 'products/golu-set/images/IMG-20250822-WA0129.jpg' },
  { id: 'golu-set/IMG-20250822-WA0130.jpg', category: 'Golu Set', name: 'Golu Set Toy 110', image: 'products/golu-set/images/IMG-20250822-WA0130.jpg' },
  { id: 'golu-set/IMG-20250822-WA0114.jpg', category: 'Golu Set', name: 'Golu Set Toy 94', image: 'products/golu-set/images/IMG-20250822-WA0114.jpg' },
  { id: 'golu-set/IMG-20250822-WA0115.jpg', category: 'Golu Set', name: 'Golu Set Toy 95', image: 'products/golu-set/images/IMG-20250822-WA0115.jpg' },
  { id: 'golu-set/IMG-20250822-WA0116.jpg', category: 'Golu Set', name: 'Golu Set Toy 96', image: 'products/golu-set/images/IMG-20250822-WA0116.jpg' },
  { id: 'golu-set/IMG-20250822-WA0117.jpg', category: 'Golu Set', name: 'Golu Set Toy 97', image: 'products/golu-set/images/IMG-20250822-WA0117.jpg' },
  { id: 'golu-set/IMG-20250822-WA0118.jpg', category: 'Golu Set', name: 'Golu Set Toy 98', image: 'products/golu-set/images/IMG-20250822-WA0118.jpg' },
  { id: 'golu-set/IMG-20250822-WA0119.jpg', category: 'Golu Set', name: 'Golu Set Toy 99', image: 'products/golu-set/images/IMG-20250822-WA0119.jpg' },
  { id: 'golu-set/IMG-20250822-WA0120.jpg', category: 'Golu Set', name: 'Golu Set Toy 100', image: 'products/golu-set/images/IMG-20250822-WA0120.jpg' },
  { id: 'golu-set/IMG-20250822-WA0121.jpg', category: 'Golu Set', name: 'Golu Set Toy 101', image: 'products/golu-set/images/IMG-20250822-WA0121.jpg' },
  { id: 'golu-set/IMG-20250822-WA0122.jpg', category: 'Golu Set', name: 'Golu Set Toy 102', image: 'products/golu-set/images/IMG-20250822-WA0122.jpg' },

  { id: 'golu-set/IMG-20250822-WA0123.jpg', category: 'Golu Set', name: 'Golu Set Toy 103', image: 'products/golu-set/images/IMG-20250822-WA0123.jpg' },
  { id: 'golu-set/IMG-20250822-WA0124.jpg', category: 'Golu Set', name: 'Golu Set Toy 104', image: 'products/golu-set/images/IMG-20250822-WA0124.jpg' },
  { id: 'golu-set/IMG-20250822-WA0125.jpg', category: 'Golu Set', name: 'Golu Set Toy 105', image: 'products/golu-set/images/IMG-20250822-WA0125.jpg' },
  { id: 'golu-set/IMG-20250822-WA0126.jpg', category: 'Golu Set', name: 'Golu Set Toy 106', image: 'products/golu-set/images/IMG-20250822-WA0126.jpg' },
  { id: 'golu-set/IMG-20250822-WA0127.jpg', category: 'Golu Set', name: 'Golu Set Toy 107', image: 'products/golu-set/images/IMG-20250822-WA0127.jpg' },
  { id: 'golu-set/IMG-20250822-WA0128.jpg', category: 'Golu Set', name: 'Golu Set Toy 108', image: 'products/golu-set/images/IMG-20250822-WA0128.jpg' },
  { id: 'golu-set/IMG-20250822-WA0129.jpg', category: 'Golu Set', name: 'Golu Set Toy 109', image: 'products/golu-set/images/IMG-20250822-WA0129.jpg' },
  { id: 'golu-set/IMG-20250822-WA0130.jpg', category: 'Golu Set', name: 'Golu Set Toy 110', image: 'products/golu-set/images/IMG-20250822-WA0130.jpg' },
  { id: 'golu-set/IMG-20250822-WA0131.jpg', category: 'Golu Set', name: 'Golu Set Toy 131', image: 'products/golu-set/images/IMG-20250822-WA0131.jpg' },
  { id: 'golu-set/IMG-20250822-WA0132.jpg', category: 'Golu Set', name: 'Golu Set Toy 132', image: 'products/golu-set/images/IMG-20250822-WA0132.jpg' },
  { id: 'golu-set/IMG-20250822-WA0133.jpg', category: 'Golu Set', name: 'Golu Set Toy 133', image: 'products/golu-set/images/IMG-20250822-WA0133.jpg' },
  { id: 'golu-set/IMG-20250822-WA0134.jpg', category: 'Golu Set', name: 'Golu Set Toy 134', image: 'products/golu-set/images/IMG-20250822-WA0134.jpg' },
  { id: 'golu-set/IMG-20250822-WA0135.jpg', category: 'Golu Set', name: 'Golu Set Toy 135', image: 'products/golu-set/images/IMG-20250822-WA0135.jpg' },
  { id: 'golu-set/IMG-20250822-WA0136.jpg', category: 'Golu Set', name: 'Golu Set Toy 136', image: 'products/golu-set/images/IMG-20250822-WA0136.jpg' },
  { id: 'golu-set/IMG-20250822-WA0137.jpg', category: 'Golu Set', name: 'Golu Set Toy 137', image: 'products/golu-set/images/IMG-20250822-WA0137.jpg' },
  { id: 'golu-set/IMG-20250822-WA0138.jpg', category: 'Golu Set', name: 'Golu Set Toy 138', image: 'products/golu-set/images/IMG-20250822-WA0138.jpg' },
  { id: 'golu-set/IMG-20250822-WA0139.jpg', category: 'Golu Set', name: 'Golu Set Toy 139', image: 'products/golu-set/images/IMG-20250822-WA0139.jpg' },
  { id: 'golu-set/IMG-20250822-WA0140.jpg', category: 'Golu Set', name: 'Golu Set Toy 140', image: 'products/golu-set/images/IMG-20250822-WA0140.jpg' },
  { id: 'golu-set/IMG-20250822-WA0141.jpg', category: 'Golu Set', name: 'Golu Set Toy 141', image: 'products/golu-set/images/IMG-20250822-WA0141.jpg' },
  { id: 'golu-set/IMG-20250822-WA0142.jpg', category: 'Golu Set', name: 'Golu Set Toy 142', image: 'products/golu-set/images/IMG-20250822-WA0142.jpg' },
  { id: 'golu-set/IMG-20250822-WA0143.jpg', category: 'Golu Set', name: 'Golu Set Toy 143', image: 'products/golu-set/images/IMG-20250822-WA0143.jpg' },
  { id: 'golu-set/IMG-20250822-WA0144.jpg', category: 'Golu Set', name: 'Golu Set Toy 144', image: 'products/golu-set/images/IMG-20250822-WA0144.jpg' },
  { id: 'golu-set/IMG-20250822-WA0145.jpg', category: 'Golu Set', name: 'Golu Set Toy 145', image: 'products/golu-set/images/IMG-20250822-WA0145.jpg' },
  { id: 'golu-set/IMG-20250822-WA0146.jpg', category: 'Golu Set', name: 'Golu Set Toy 146', image: 'products/golu-set/images/IMG-20250822-WA0146.jpg' },
  { id: 'golu-set/IMG-20250822-WA0147.jpg', category: 'Golu Set', name: 'Golu Set Toy 147', image: 'products/golu-set/images/IMG-20250822-WA0147.jpg' },
  { id: 'golu-set/IMG-20250822-WA0148.jpg', category: 'Golu Set', name: 'Golu Set Toy 148', image: 'products/golu-set/images/IMG-20250822-WA0148.jpg' },
  { id: 'golu-set/IMG-20250822-WA0149.jpg', category: 'Golu Set', name: 'Golu Set Toy 149', image: 'products/golu-set/images/IMG-20250822-WA0149.jpg' },
  { id: 'golu-set/IMG-20250822-WA0150.jpg', category: 'Golu Set', name: 'Golu Set Toy 150', image: 'products/golu-set/images/IMG-20250822-WA0150.jpg' },
  { id: 'golu-set/IMG-20250822-WA0151.jpg', category: 'Golu Set', name: 'Golu Set Toy 151', image: 'products/golu-set/images/IMG-20250822-WA0151.jpg' },
  { id: 'golu-set/IMG-20250822-WA0152.jpg', category: 'Golu Set', name: 'Golu Set Toy 152', image: 'products/golu-set/images/IMG-20250822-WA0152.jpg' },
  { id: 'golu-set/IMG-20250822-WA0153.jpg', category: 'Golu Set', name: 'Golu Set Toy 153', image: 'products/golu-set/images/IMG-20250822-WA0153.jpg' },
  { id: 'golu-set/IMG-20250822-WA0154.jpg', category: 'Golu Set', name: 'Golu Set Toy 154', image: 'products/golu-set/images/IMG-20250822-WA0154.jpg' },
  { id: 'golu-set/IMG-20250822-WA0155.jpg', category: 'Golu Set', name: 'Golu Set Toy 155', image: 'products/golu-set/images/IMG-20250822-WA0155.jpg' },
  { id: 'golu-set/IMG-20250822-WA0156.jpg', category: 'Golu Set', name: 'Golu Set Toy 156', image: 'products/golu-set/images/IMG-20250822-WA0156.jpg' },
  { id: 'golu-set/IMG-20250822-WA0157.jpg', category: 'Golu Set', name: 'Golu Set Toy 157', image: 'products/golu-set/images/IMG-20250822-WA0157.jpg' },
  { id: 'golu-set/IMG-20250822-WA0158.jpg', category: 'Golu Set', name: 'Golu Set Toy 158', image: 'products/golu-set/images/IMG-20250822-WA0158.jpg' },
  { id: 'golu-set/IMG-20250822-WA0159.jpg', category: 'Golu Set', name: 'Golu Set Toy 159', image: 'products/golu-set/images/IMG-20250822-WA0159.jpg' },
  { id: 'golu-set/IMG-20250822-WA0160.jpg', category: 'Golu Set', name: 'Golu Set Toy 160', image: 'products/golu-set/images/IMG-20250822-WA0160.jpg' },
  { id: 'golu-set/IMG-20250822-WA0161.jpg', category: 'Golu Set', name: 'Golu Set Toy 161', image: 'products/golu-set/images/IMG-20250822-WA0161.jpg' },
  { id: 'golu-set/IMG-20250822-WA0162.jpg', category: 'Golu Set', name: 'Golu Set Toy 162', image: 'products/golu-set/images/IMG-20250822-WA0162.jpg' },
  { id: 'golu-set/IMG-20250822-WA0163.jpg', category: 'Golu Set', name: 'Golu Set Toy 163', image: 'products/golu-set/images/IMG-20250822-WA0163.jpg' },
  { id: 'golu-set/IMG-20250822-WA0164.jpg', category: 'Golu Set', name: 'Golu Set Toy 164', image: 'products/golu-set/images/IMG-20250822-WA0164.jpg' },
  { id: 'golu-set/IMG-20250822-WA0165.jpg', category: 'Golu Set', name: 'Golu Set Toy 165', image: 'products/golu-set/images/IMG-20250822-WA0165.jpg' },
  { id: 'golu-set/IMG-20250822-WA0166.jpg', category: 'Golu Set', name: 'Golu Set Toy 166', image: 'products/golu-set/images/IMG-20250822-WA0166.jpg' },
  { id: 'golu-set/IMG-20250822-WA0167.jpg', category: 'Golu Set', name: 'Golu Set Toy 167', image: 'products/golu-set/images/IMG-20250822-WA0167.jpg' },
  { id: 'golu-set/IMG-20250822-WA0168.jpg', category: 'Golu Set', name: 'Golu Set Toy 168', image: 'products/golu-set/images/IMG-20250822-WA0168.jpg' },
  { id: 'golu-set/IMG-20250822-WA0169.jpg', category: 'Golu Set', name: 'Golu Set Toy 169', image: 'products/golu-set/images/IMG-20250822-WA0169.jpg' },
  {
    "id": "golu-set/IMG-20250822-WA0169.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 169",
    "image": "products/golu-set/images/IMG-20250822-WA0169.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0170.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 170",
    "image": "products/golu-set/images/IMG-20250822-WA0170.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0171.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 171",
    "image": "products/golu-set/images/IMG-20250822-WA0171.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0172.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 172",
    "image": "products/golu-set/images/IMG-20250822-WA0172.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0173.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 173",
    "image": "products/golu-set/images/IMG-20250822-WA0173.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0174.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 174",
    "image": "products/golu-set/images/IMG-20250822-WA0174.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0175.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 175",
    "image": "products/golu-set/images/IMG-20250822-WA0175.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0176.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 176",
    "image": "products/golu-set/images/IMG-20250822-WA0176.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0177.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 177",
    "image": "products/golu-set/images/IMG-20250822-WA0177.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0178.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 178",
    "image": "products/golu-set/images/IMG-20250822-WA0178.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0179.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 179",
    "image": "products/golu-set/images/IMG-20250822-WA0179.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0180.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 180",
    "image": "products/golu-set/images/IMG-20250822-WA0180.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0181.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 181",
    "image": "products/golu-set/images/IMG-20250822-WA0181.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0182.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 182",
    "image": "products/golu-set/images/IMG-20250822-WA0182.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0183.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 183",
    "image": "products/golu-set/images/IMG-20250822-WA0183.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0184.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 184",
    "image": "products/golu-set/images/IMG-20250822-WA0184.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0185.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 185",
    "image": "products/golu-set/images/IMG-20250822-WA0185.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0186.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 186",
    "image": "products/golu-set/images/IMG-20250822-WA0186.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0187.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 187",
    "image": "products/golu-set/images/IMG-20250822-WA0187.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0188.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 188",
    "image": "products/golu-set/images/IMG-20250822-WA0188.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0189.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 189",
    "image": "products/golu-set/images/IMG-20250822-WA0189.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0190.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 190",
    "image": "products/golu-set/images/IMG-20250822-WA0190.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0191.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 191",
    "image": "products/golu-set/images/IMG-20250822-WA0191.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0192.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 192",
    "image": "products/golu-set/images/IMG-20250822-WA0192.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0193.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 193",
    "image": "products/golu-set/images/IMG-20250822-WA0193.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0194.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 194",
    "image": "products/golu-set/images/IMG-20250822-WA0194.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0195.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 195",
    "image": "products/golu-set/images/IMG-20250822-WA0195.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0196.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 196",
    "image": "products/golu-set/images/IMG-20250822-WA0196.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0197.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 197",
    "image": "products/golu-set/images/IMG-20250822-WA0197.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0198.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 198",
    "image": "products/golu-set/images/IMG-20250822-WA0198.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0199.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 199",
    "image": "products/golu-set/images/IMG-20250822-WA0199.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0200.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 200",
    "image": "products/golu-set/images/IMG-20250822-WA0200.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0201.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 201",
    "image": "products/golu-set/images/IMG-20250822-WA0201.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0202.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 202",
    "image": "products/golu-set/images/IMG-20250822-WA0202.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0203.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 203",
    "image": "products/golu-set/images/IMG-20250822-WA0203.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0204.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 204",
    "image": "products/golu-set/images/IMG-20250822-WA0204.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0205.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 205",
    "image": "products/golu-set/images/IMG-20250822-WA0205.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0206.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 206",
    "image": "products/golu-set/images/IMG-20250822-WA0206.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0207.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 207",
    "image": "products/golu-set/images/IMG-20250822-WA0207.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0208.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 208",
    "image": "products/golu-set/images/IMG-20250822-WA0208.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0209.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 209",
    "image": "products/golu-set/images/IMG-20250822-WA0209.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0210.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 210",
    "image": "products/golu-set/images/IMG-20250822-WA0210.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0211.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 211",
    "image": "products/golu-set/images/IMG-20250822-WA0211.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0212.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 212",
    "image": "products/golu-set/images/IMG-20250822-WA0212.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0213.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 213",
    "image": "products/golu-set/images/IMG-20250822-WA0213.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0214.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 214",
    "image": "products/golu-set/images/IMG-20250822-WA0214.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0215.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 215",
    "image": "products/golu-set/images/IMG-20250822-WA0215.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0216.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 216",
    "image": "products/golu-set/images/IMG-20250822-WA0216.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0217.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 217",
    "image": "products/golu-set/images/IMG-20250822-WA0217.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0218.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 218",
    "image": "products/golu-set/images/IMG-20250822-WA0218.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0219.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 219",
    "image": "products/golu-set/images/IMG-20250822-WA0219.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0220.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 220",
    "image": "products/golu-set/images/IMG-20250822-WA0220.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0221.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 221",
    "image": "products/golu-set/images/IMG-20250822-WA0221.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0222.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 222",
    "image": "products/golu-set/images/IMG-20250822-WA0222.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0223.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 223",
    "image": "products/golu-set/images/IMG-20250822-WA0223.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0224.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 224",
    "image": "products/golu-set/images/IMG-20250822-WA0224.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0225.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 225",
    "image": "products/golu-set/images/IMG-20250822-WA0225.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0226.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 226",
    "image": "products/golu-set/images/IMG-20250822-WA0226.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0227.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 227",
    "image": "products/golu-set/images/IMG-20250822-WA0227.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0228.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 228",
    "image": "products/golu-set/images/IMG-20250822-WA0228.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0229.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 229",
    "image": "products/golu-set/images/IMG-20250822-WA0229.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0230.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 230",
    "image": "products/golu-set/images/IMG-20250822-WA0230.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0231.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 231",
    "image": "products/golu-set/images/IMG-20250822-WA0231.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0232.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 232",
    "image": "products/golu-set/images/IMG-20250822-WA0232.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0233.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 233",
    "image": "products/golu-set/images/IMG-20250822-WA0233.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0234.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 234",
    "image": "products/golu-set/images/IMG-20250822-WA0234.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0235.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 235",
    "image": "products/golu-set/images/IMG-20250822-WA0235.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0236.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 236",
    "image": "products/golu-set/images/IMG-20250822-WA0236.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0237.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 237",
    "image": "products/golu-set/images/IMG-20250822-WA0237.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0238.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 238",
    "image": "products/golu-set/images/IMG-20250822-WA0238.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0239.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 239",
    "image": "products/golu-set/images/IMG-20250822-WA0239.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0240.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 240",
    "image": "products/golu-set/images/IMG-20250822-WA0240.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0241.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 241",
    "image": "products/golu-set/images/IMG-20250822-WA0241.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0242.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 242",
    "image": "products/golu-set/images/IMG-20250822-WA0242.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0243.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 243",
    "image": "products/golu-set/images/IMG-20250822-WA0243.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0244.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 244",
    "image": "products/golu-set/images/IMG-20250822-WA0244.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0245.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 245",
    "image": "products/golu-set/images/IMG-20250822-WA0245.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0246.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 246",
    "image": "products/golu-set/images/IMG-20250822-WA0246.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0247.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 247",
    "image": "products/golu-set/images/IMG-20250822-WA0247.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0248.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 248",
    "image": "products/golu-set/images/IMG-20250822-WA0248.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0249.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 249",
    "image": "products/golu-set/images/IMG-20250822-WA0249.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0250.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 250",
    "image": "products/golu-set/images/IMG-20250822-WA0250.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0251.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 251",
    "image": "products/golu-set/images/IMG-20250822-WA0251.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0252.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 252",
    "image": "products/golu-set/images/IMG-20250822-WA0252.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0253.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 253",
    "image": "products/golu-set/images/IMG-20250822-WA0253.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0254.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 254",
    "image": "products/golu-set/images/IMG-20250822-WA0254.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0255.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 255",
    "image": "products/golu-set/images/IMG-20250822-WA0255.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0256.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 256",
    "image": "products/golu-set/images/IMG-20250822-WA0256.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0257.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 257",
    "image": "products/golu-set/images/IMG-20250822-WA0257.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0258.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 258",
    "image": "products/golu-set/images/IMG-20250822-WA0258.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0259.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 259",
    "image": "products/golu-set/images/IMG-20250822-WA0259.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0260.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 260",
    "image": "products/golu-set/images/IMG-20250822-WA0260.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0261.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 261",
    "image": "products/golu-set/images/IMG-20250822-WA0261.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0262.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 262",
    "image": "products/golu-set/images/IMG-20250822-WA0262.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0263.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 263",
    "image": "products/golu-set/images/IMG-20250822-WA0263.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0264.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 264",
    "image": "products/golu-set/images/IMG-20250822-WA0264.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0265.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 265",
    "image": "products/golu-set/images/IMG-20250822-WA0265.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0266.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 266",
    "image": "products/golu-set/images/IMG-20250822-WA0266.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0267.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 267",
    "image": "products/golu-set/images/IMG-20250822-WA0267.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0268.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 268",
    "image": "products/golu-set/images/IMG-20250822-WA0268.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0269.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 269",
    "image": "products/golu-set/images/IMG-20250822-WA0269.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0270.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 270",
    "image": "products/golu-set/images/IMG-20250822-WA0270.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0271.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 271",
    "image": "products/golu-set/images/IMG-20250822-WA0271.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0272.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 272",
    "image": "products/golu-set/images/IMG-20250822-WA0272.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0273.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 273",
    "image": "products/golu-set/images/IMG-20250822-WA0273.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0274.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 274",
    "image": "products/golu-set/images/IMG-20250822-WA0274.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0275.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 275",
    "image": "products/golu-set/images/IMG-20250822-WA0275.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0276.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 276",
    "image": "products/golu-set/images/IMG-20250822-WA0276.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0277.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 277",
    "image": "products/golu-set/images/IMG-20250822-WA0277.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0278.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 278",
    "image": "products/golu-set/images/IMG-20250822-WA0278.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0279.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 279",
    "image": "products/golu-set/images/IMG-20250822-WA0279.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0280.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 280",
    "image": "products/golu-set/images/IMG-20250822-WA0280.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0281.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 281",
    "image": "products/golu-set/images/IMG-20250822-WA0281.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0282.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 282",
    "image": "products/golu-set/images/IMG-20250822-WA0282.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0283.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 283",
    "image": "products/golu-set/images/IMG-20250822-WA0283.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0284.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 284",
    "image": "products/golu-set/images/IMG-20250822-WA0284.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0285.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 285",
    "image": "products/golu-set/images/IMG-20250822-WA0285.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0286.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 286",
    "image": "products/golu-set/images/IMG-20250822-WA0286.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0287.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 287",
    "image": "products/golu-set/images/IMG-20250822-WA0287.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0288.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 288",
    "image": "products/golu-set/images/IMG-20250822-WA0288.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0289.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 289",
    "image": "products/golu-set/images/IMG-20250822-WA0289.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0290.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 290",
    "image": "products/golu-set/images/IMG-20250822-WA0290.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0291.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 291",
    "image": "products/golu-set/images/IMG-20250822-WA0291.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0292.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 292",
    "image": "products/golu-set/images/IMG-20250822-WA0292.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0293.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 293",
    "image": "products/golu-set/images/IMG-20250822-WA0293.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0294.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 294",
    "image": "products/golu-set/images/IMG-20250822-WA0294.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0295.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 295",
    "image": "products/golu-set/images/IMG-20250822-WA0295.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0296.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 296",
    "image": "products/golu-set/images/IMG-20250822-WA0296.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0297.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 297",
    "image": "products/golu-set/images/IMG-20250822-WA0297.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0298.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 298",
    "image": "products/golu-set/images/IMG-20250822-WA0298.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0299.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 299",
    "image": "products/golu-set/images/IMG-20250822-WA0299.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0300.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 300",
    "image": "products/golu-set/images/IMG-20250822-WA0300.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0301.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 301",
    "image": "products/golu-set/images/IMG-20250822-WA0301.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0302.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 302",
    "image": "products/golu-set/images/IMG-20250822-WA0302.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0303.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 303",
    "image": "products/golu-set/images/IMG-20250822-WA0303.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0304.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 304",
    "image": "products/golu-set/images/IMG-20250822-WA0304.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0305.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 305",
    "image": "products/golu-set/images/IMG-20250822-WA0305.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0306.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 306",
    "image": "products/golu-set/images/IMG-20250822-WA0306.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0307.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 307",
    "image": "products/golu-set/images/IMG-20250822-WA0307.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0308.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 308",
    "image": "products/golu-set/images/IMG-20250822-WA0308.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0309.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 309",
    "image": "products/golu-set/images/IMG-20250822-WA0309.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0310.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 310",
    "image": "products/golu-set/images/IMG-20250822-WA0310.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0311.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 311",
    "image": "products/golu-set/images/IMG-20250822-WA0311.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0312.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 312",
    "image": "products/golu-set/images/IMG-20250822-WA0312.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0313.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 313",
    "image": "products/golu-set/images/IMG-20250822-WA0313.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0314.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 314",
    "image": "products/golu-set/images/IMG-20250822-WA0314.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0315.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 315",
    "image": "products/golu-set/images/IMG-20250822-WA0315.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0316.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 316",
    "image": "products/golu-set/images/IMG-20250822-WA0316.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0317.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 317",
    "image": "products/golu-set/images/IMG-20250822-WA0317.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0318.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 318",
    "image": "products/golu-set/images/IMG-20250822-WA0318.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0319.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 319",
    "image": "products/golu-set/images/IMG-20250822-WA0319.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0320.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 320",
    "image": "products/golu-set/images/IMG-20250822-WA0320.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0321.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 321",
    "image": "products/golu-set/images/IMG-20250822-WA0321.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0322.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 322",
    "image": "products/golu-set/images/IMG-20250822-WA0322.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0323.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 323",
    "image": "products/golu-set/images/IMG-20250822-WA0323.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0324.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 324",
    "image": "products/golu-set/images/IMG-20250822-WA0324.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0325.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 325",
    "image": "products/golu-set/images/IMG-20250822-WA0325.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0326.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 326",
    "image": "products/golu-set/images/IMG-20250822-WA0326.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0327.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 327",
    "image": "products/golu-set/images/IMG-20250822-WA0327.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0328.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 328",
    "image": "products/golu-set/images/IMG-20250822-WA0328.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0329.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 329",
    "image": "products/golu-set/images/IMG-20250822-WA0329.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0330.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 330",
    "image": "products/golu-set/images/IMG-20250822-WA0330.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0331.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 331",
    "image": "products/golu-set/images/IMG-20250822-WA0331.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0332.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 332",
    "image": "products/golu-set/images/IMG-20250822-WA0332.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0333.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 333",
    "image": "products/golu-set/images/IMG-20250822-WA0333.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0334.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 334",
    "image": "products/golu-set/images/IMG-20250822-WA0334.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0335.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 335",
    "image": "products/golu-set/images/IMG-20250822-WA0335.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0336.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 336",
    "image": "products/golu-set/images/IMG-20250822-WA0336.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0337.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 337",
    "image": "products/golu-set/images/IMG-20250822-WA0337.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0338.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 338",
    "image": "products/golu-set/images/IMG-20250822-WA0338.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0339.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 339",
    "image": "products/golu-set/images/IMG-20250822-WA0339.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0340.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 340",
    "image": "products/golu-set/images/IMG-20250822-WA0340.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0341.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 341",
    "image": "products/golu-set/images/IMG-20250822-WA0341.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0342.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 342",
    "image": "products/golu-set/images/IMG-20250822-WA0342.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0343.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 343",
    "image": "products/golu-set/images/IMG-20250822-WA0343.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0344.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 344",
    "image": "products/golu-set/images/IMG-20250822-WA0344.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0345.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 345",
    "image": "products/golu-set/images/IMG-20250822-WA0345.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0346.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 346",
    "image": "products/golu-set/images/IMG-20250822-WA0346.jpg"
  },
  {
    "id": "golu-set/IMG-20250822-WA0347.jpg",
    "category": "Golu Set",
    "name": "Golu Set Toy 347",
    "image": "products/golu-set/images/IMG-20250822-WA0347.jpg"
  }

];

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

// 3) Card factory
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

// 5) Init
async function init() {
  try {
    // For now we use the explicit list above.
    // Later: replace with fetch('data/catalog.json', { cache: 'no-store' })
    const data = STUB;

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
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

init();
