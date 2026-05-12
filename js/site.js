const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const header = document.querySelector('.site-header');
const setHeaderState = () => {
  if (!header) return;
  header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });
