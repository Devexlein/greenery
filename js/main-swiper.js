// Инициализируем Swiper

let feedbackSwiper = new Swiper('.feedback__slider', {
   slidesPerView: 3,
   spaceBetween: 100,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.feedback__btn-next',
      prevEl: '.swiper-button-prev.feedback__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   cssMode: true,
   simulateTouch: true,
   touchRatio: 2,
   grabCursor: true,
});

let popupFeedbackSwiper = new Swiper('.popup-feedback__slider', {
   slidesPerView: 2,
   spaceBetween: 20,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.popup-feedback__btn-next',
      prevEl: '.swiper-button-prev.popup-feedback__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   cssMode: true,
   simulateTouch: true,
   touchRatio: 2,
   grabCursor: true,
});