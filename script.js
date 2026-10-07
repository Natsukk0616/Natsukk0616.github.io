const searchButton = document.querySelector('.search-toggle');

searchButton?.addEventListener('click', () => {
  const isExpanded = searchButton.getAttribute('aria-expanded') === 'true';
  searchButton.setAttribute('aria-expanded', String(!isExpanded));
});
