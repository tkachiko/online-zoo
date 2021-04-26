const menuArrow = document.querySelector('.sidebar-menu__arrow');
const sidebar = document.querySelector('.sidebar-menu');
const burger = document.querySelector('.menu__burger');
const nav = document.querySelector('.nav');

menuArrow.addEventListener('click', function (e) {
  menuArrow.classList.toggle('sidebar-menu__arrow--active');
  sidebar.classList.toggle('sidebar-menu--active');
});

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('menu__burger--active');
    nav.classList.toggle('nav--active');
  });
}
const toggleBurger = document.querySelector('.menu__item--cross');
toggleBurger.addEventListener('click', function () {
  burger.classList.toggle('menu__burger--active');
  nav.classList.toggle('nav--active');
});
