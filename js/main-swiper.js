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
   autoplay: {
      delay: 2000,
   },
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
         spaceBetween: 100,
      }
   },
   // centerInsufficientSlides: true,
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
   slideToClickedSlide: true,
   cssMode: true,
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: false
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true
});

let popupFeedbackSwiper = new Swiper('.popup-feedback__slider', {
   slidesPerView: 3,
   centeredSlides: true,
   effect: 'coverflow',

   coverflowEffect: {
      depth: 30,
      rotate: 40,
      stretch: 30,
      slideShadows: true,
      scale: 0.6
   },
   breakpoints: {
      375.98: {
         slidesPerView: 3,
         spaceBetween: 0,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 60,
            rotate: 40,
            stretch: 40,
            slideShadows: true,
            scale: 0.7
         },
      },
      575.98: {
         slidesPerView: 3,
         spaceBetween: 0,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 80,
            rotate: 40,
            stretch: 30,
            slideShadows: true,
            scale: 0.7
         },
      },
      767.98: {
         slidesPerView: 3,
         spaceBetween: 0,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 20,
            rotate: 30,
            stretch: 50,
            slideShadows: true,
            scale: 0.7
         },
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 30,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 40,
            rotate: 40,
            stretch: 75,
            slideShadows: true,
            scale: 0.7
         },
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 30,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 70,
            rotate: 30,
            stretch: 140,
            slideShadows: true,
            scale: 0.75,
         },
      },
      1201: {
         slidesPerView: 3,
         spaceBetween: 40,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 100,
            rotate: 30,
            stretch: 140,
            slideShadows: true,
            scale: 0.8,
         },
      },
      1401: {
         slidesPerView: 3,
         spaceBetween: 50,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 160,
            rotate: 40,
            stretch: 170,
            slideShadows: true,
            scale: 0.8,
         },
      }
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
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: false
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true
   // loop: true,
   // loopedSlides: 3,
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