const slider = tns({
  container: '.carousel__inner',
  controls: false,
  items: 1,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  mouseDrag: true
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});