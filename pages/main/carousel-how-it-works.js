const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  let newActive = event.target;
  let isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item--active')) {
    return;
  }

  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.parentElement.dataset.pos;

  const current = elems.find(elem => elem.dataset.pos == 0);
  const prev = elems.find(elem => elem.dataset.pos == -1);
  const next = elems.find(elem => elem.dataset.pos == 1);
  const first = elems.find(elem => elem.dataset.pos == -2);
  const last = elems.find(elem => elem.dataset.pos == 2);

  current.classList.remove('carousel__item--active');

  [current, prev, next, first, last].forEach(item => {
    let itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

function getPos(current, active) {
  const diff = current - active;

  if (Math.abs(diff) > 2) {
    return diff > 0 ? diff - carouselItems.length : diff + carouselItems.length;
  }

  return diff;
}
