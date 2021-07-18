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

const mapImage = document.getElementById('map');
const wrapper = document.getElementById('wrapper');
const headerElem = document.getElementById('header');
const footerElem = document.getElementById('footer');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');

let topIndent = 0;
let leftIndent = 0;

const calculateCoords = (e, elem) => {
  let box = elem.getBoundingClientRect();
  topIndent = e.pageY - box.top + (pageYOffset + 80);
  leftIndent = e.pageX - box.left + pageXOffset;
};

const moveAt = e => {
  const shiftX = e.pageX - leftIndent;
  const shiftY = e.pageY - topIndent;

  mapImage.style.left = e.pageX - pageXOffset - leftIndent + 'px';
  if (e.pageX >= wrapper.offsetWidth) {
    stopDrag();
  } else if (e.pageX <= 0) {
    stopDrag();
  }
  mapImage.style.top = e.pageY - pageYOffset - topIndent + 'px';
};

const stopDrag = () => {
  document.removeEventListener('mousemove', moveAt);
  mapImage.removeEventListener('mouseup', stopDrag);
};

mapImage.addEventListener('mousedown', e => {

  if (mapImage.width <= wrapper.offsetWidth) {
    return;
  }

  calculateCoords(e, mapImage);

  moveAt(e);

  document.addEventListener('mousemove', moveAt);
  mapImage.addEventListener('mouseup', stopDrag);
});

mapImage.ondragstart = function () {
  return false;
};

headerElem.addEventListener('mouseenter', stopDrag);
footerElem.addEventListener('mouseenter', stopDrag);

zoomInBtn.addEventListener('click', () => {
  if (mapImage.firstElementChild.width < (wrapper.offsetWidth  - 17) * 2) {
    mapImage.firstElementChild.style.width = `${mapImage.firstElementChild.width * 1.25}px`;
  }
});
zoomOutBtn.addEventListener('click', () => {
  if (mapImage.firstElementChild.width >= wrapper.offsetWidth - 743) {
    mapImage.firstElementChild.style.width = `${mapImage.firstElementChild.width / 1.25}px`;

    if (mapImage.width <= wrapper.offsetWidth) {
      mapImage.firstElementChild.style.width = `${wrapper.offsetWidth}px`;
      mapImage.style.top = '0px';
      mapImage.style.left = '0px';
    }
  }
});