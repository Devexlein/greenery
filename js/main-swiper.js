// Инициализируем Swiper

// tabs-section
let paintingsTabsSwiper = new Swiper('.tabs__paintings-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
         // loop: true,
         // loopedSlides: 1
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
         // loopedSlides: 2
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_paintings',
      prevEl: '.swiper-button-prev.tabs__btn-prev_paintings'
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
   // loop: true,
   // loopedSlides: 3,
   // cssMode: true,
   slideToClickedSlide: true,
});

let wallsTabsSwiper = new Swiper('.tabs__walls-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
         // loop: true,
         // loopedSlides: 1
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
         // loopedSlides: 2
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_walls',
      prevEl: '.swiper-button-prev.tabs__btn-prev_walls'
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
   // loop: true,
   // loopedSlides: 3,
   // cssMode: true,
   slideToClickedSlide: true,
});

let logosTabsSwiper = new Swiper('.tabs__logos-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
         // loop: true,
         // loopedSlides: 1
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
         // loopedSlides: 2
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_logos',
      prevEl: '.swiper-button-prev.tabs__btn-prev_logos'
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
   // loop: true,
   // loopedSlides: 3,
   // cssMode: true,
   slideToClickedSlide: true,
});

let otherTabsSwiper = new Swiper('.tabs__other-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
         // loop: true,
         // loopedSlides: 1
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
         // loopedSlides: 2
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_other',
      prevEl: '.swiper-button-prev.tabs__btn-prev_other'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   // cssMode: true,
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   grabCursor: true,
   // loop: true,
   // loopedSlides: 3,
   slideToClickedSlide: true,
});

// feedback-section
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
   touchRatio: 2,
   grabCursor: true,
   loop: true,
   loopedSlides: 3,
   cssMode: true,
   slideToClickedSlide: true,
});

let popupFeedbackSwiper = new Swiper('.popup-feedback__slider', {
   // cssMode: true,
   slidesPerView: 3,
   effect: 'coverflow',

   coverflowEffect: {
      depth: 30,
      rotate: 30,
      stretch: 80,
      slideShadows: true,
      scale: 0.7,
      // modifier: 2,
   },
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
   simulateTouch: true,
   touchRatio: 2,
   grabCursor: true,

   loop: true,
   loopedSlides: 3,
});

// customers-section
let customersSwiper = new Swiper('.customers__slider', {
   slidesPerView: 1,
   spaceBetween: 5,
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