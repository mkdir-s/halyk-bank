const swiper = new Swiper('.intro-swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper1 = new Swiper('.info-swiper', {
  slidesPerView: 3,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.info-swiper__pagination',
  },
});
