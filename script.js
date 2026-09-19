document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => document.body.classList.remove('menu-open'));
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
