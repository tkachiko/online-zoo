const menuArrow = document.querySelector('.sidebar-menu__arrow');
const sidebar = document.querySelector('.sidebar-menu');

menuArrow.addEventListener('click', function (e) {
  menuArrow.classList.toggle('sidebar-menu__arrow--active');
  sidebar.classList.toggle('sidebar-menu--active');
});
