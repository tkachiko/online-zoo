const burger = document.querySelector('.menu__burger');
const nav = document.querySelector('.nav');
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
