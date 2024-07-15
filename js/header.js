
const banner = document.querySelector('.inner');
const headerInner = document.querySelector('.header-inner');

window.addEventListener('scroll', () => {
  if (window.scrollY > banner.offsetHeight) {
    headerInner.classList.add('fixed-header');
  } else {
    headerInner.classList.remove('fixed-header');
  }
});