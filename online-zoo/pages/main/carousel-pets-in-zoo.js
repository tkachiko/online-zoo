const gap = 20;

const carousel = document.querySelector('.slider-box'),
  content = document.querySelectorAll('.cards'),
  next = document.getElementById('arrow-prev'),
  prev = document.getElementById('arrow-next');

let slideType = 'all';
let slideIndex = 0;
let slideCoefficient = 8;

let width = carousel.offsetWidth;
let imgWidth = document.querySelector('img').offsetWidth;
window.addEventListener('resize', e => {
  width = carousel.offsetWidth;
  imgWidth = document.querySelector('img').offsetWidth;
});

next.addEventListener('click', e => {
  delayAutoSliding();

  slideIndex += slideType === 'all' ? slideCoefficient : 1;

  carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
  if (slideIndex > 0) {
    prev.style.display = 'flex';
  }
  if (slideIndex >= 8) {
    next.style.display = 'none';
  }
});

prev.addEventListener('click', e => {
  delayAutoSliding();

  slideIndex -= slideType === 'all' ? slideCoefficient : 1;

  carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
  if (slideIndex < 16) {
    next.style.display = 'flex';
  }
  if (slideIndex <= 0) {
    prev.style.display = 'none';
  }
});

const slideFunc = () => {
  slideIndex += slideType === 'all' ? slideCoefficient : 1;
  if (slideIndex > 0) {
    prev.style.display = 'flex';
  }
  if (slideIndex >= 8) {
    next.style.display = 'none';
  }
  if (slideIndex > 8) {
    if (!(slideIndex < 16)) {
      slideIndex = 0;
    }
    prev.style.display = 'none';
    next.style.display = 'flex';
  }
  carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
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
  }, 6000);
};

carousel.addEventListener('click', delayAutoSliding);
