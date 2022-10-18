
const menuBtn = document.getElementById('menu-btn');
const menuElem = document.getElementById('menu');
const navLinks = document.querySelectorAll('#menu a');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('opened');
  menuElem.classList.toggle('reveal');

});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    menuElem.classList.remove('reveal');
    menuBtn.classList.remove('opened');
  });
});
