const swiper = new Swiper('.swiper', {
  mousewheel: true,
  direction: 'vertical',
  speed: 1700,
  parallax: true,
});

document.querySelectorAll('.head-content h1').forEach((e) => {
  const initialDuration = 1;
  const coefficient = 5;

  e.innerHTML = e.textContent.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');

  e.querySelectorAll('.letter').forEach(function (l, i) {
    l.setAttribute('style', `z-index: -${i}; transition-duration: ${i / coefficient + initialDuration}s`);
  });
});

swiper.on('slideChange', () => {
  const items = document.querySelectorAll('[data-slider-ui="slide"]');

  for (let i = 0; i < items.length; i++) {
    if (swiper.activeIndex === i) {
      items[i].classList.add('active');
    } else {
      items[i].classList.remove('active');
    }
  }
});
