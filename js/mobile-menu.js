export { resetMobileMenuAndAriaState };

const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

  document.body.classList.toggle("modal-open");
  mobileMenu.classList.toggle('is-open');

  // trcgthvtynedfd для бібліотеки body-scroll-lock
  // const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  // bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  resetMobileMenuAndAriaState()
  // bodyScrollLock.enableBodyScroll(document.body);
});

function resetMobileMenuAndAriaState() {
  document.body.classList.remove("modal-open");
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
}