const searchBar = document.getElementById('searchBar');
const rows = document.querySelectorAll('#productTable tbody tr');

searchBar.addEventListener('keyup', function () {
  const query = this.value.toLowerCase();
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
});
