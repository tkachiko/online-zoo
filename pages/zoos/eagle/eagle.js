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

// Video block

const gap = 20;

const carousel = document.getElementById('carousel');
const content = document.getElementById('content');
const mainFrame = document.querySelector('.main-video');
const smallFrame = document.getElementsByClassName('small-video');
const frameWidth = document.querySelector('.small-video').offsetWidth;

let frameIndex = 0;

const slideFunc = () => {
  carousel.scrollTo((frameWidth + gap) * frameIndex, 0);
  frameIndex++;
  if (frameIndex >= 4) {
    frameIndex = 0;
  }
};

let autoSlideInterval = setInterval(slideFunc, 3000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 3000);
  }, 3000);
};

carousel.addEventListener('click', delayAutoSliding);

function playVideo(n) {
  let srcSmall;
  for (let i = 0; i < smallFrame.length - 1; i++) {
    srcSmall = smallFrame[n].src;
  }
  smallFrame[n].src = mainFrame.src;
  mainFrame.src = srcSmall;
}

document.querySelector('.frame1').addEventListener('click', () => {
  playVideo(0);
});

document.querySelector('.frame2').addEventListener('click', () => {
  playVideo(1);
});

document.querySelector('.frame3').addEventListener('click', () => {
  playVideo(2);
});

document.querySelector('.frame4').addEventListener('click', () => {
  playVideo(3);
});

document.querySelector('.frame5').addEventListener('click', () => {
  playVideo(4);
});

document.querySelector('.frame6').addEventListener('click', () => {
  playVideo(5);
});

document.querySelector('.frame7').addEventListener('click', () => {
  playVideo(6);
});
