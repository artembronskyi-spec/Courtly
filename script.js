document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const primaryNav = document.getElementById('primary-nav');

  if (menuBtn && primaryNav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('is-open');
    });
  }
});