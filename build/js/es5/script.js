'use strict';

var swiperMain = new Swiper('.slider-main .swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 900,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false
  }
});