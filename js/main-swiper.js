// Инициализируем Swiper

let feedbackSwiper = new Swiper('.feedback__slider', {
   slidesPerView: 3,
   spaceBetween: 50,
   breakpoints: {
      320: {
         slidesPerView: 3,
         spaceBetween: 50
      },
      575.98: {
         slidesPerView: 3,
         spaceBetween: 50
      },
      767.98: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 40
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 50
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 100
      }
   },
   centerInsufficientSlides: true,
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
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   grabCursor: true,
   loop: true,
   loopedSlides: 3,
   cssMode: true,
});

let popupFeedbackSwiper = new Swiper('.popup-feedback__slider', {
   slidesPerView: 1,
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

let customersSwiper = new Swiper('.customers__slider', {
   slidesPerView: 1,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.customers__btn-next',
      prevEl: '.swiper-button-prev.customers__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   grabCursor: true,
   cssMode: true,
});