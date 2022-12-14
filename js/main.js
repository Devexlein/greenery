"use strict"

/*  меню бургер  */
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__menu');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   });
}

// скролл тз меню, кнопок до якоря на странице 
const anchors = document.querySelectorAll('[data-goto]');
const timeout = 800;

if (anchors.length > 0) {
   anchors.forEach(anchor => {
      anchor.addEventListener("click", onAnchorClick);
   });

   function onAnchorClick(e) {
      const anchor = e.target;
      // проверяем заполнен ли атрибут и существует ли данный объект
      if (anchor.dataset.goto && document.querySelector(anchor.dataset.goto)) {
         const gotoBlock = document.querySelector(anchor.dataset.goto);
         // учитываем высоту шапки
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.header__container').offsetHeight + 10;
         console.log(gotoBlock);
         console.log(gotoBlockValue);

         if (iconMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
         });
         e.preventDefault();
      }
   }
}

/*  подключение карты  */
let center = [55.72321706901226, 37.703181999999984];

function init() {
   let map = new ymaps.Map('map', {
      center: center,
      zoom: 17
   });

   let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: "default#image",
      iconImageHref: './img/showroom/location-map.png',
      iconImageSize: [50, 50],
      iconImageOffset: [-17, -40],
   });

   map.controls.remove('geolocationControl'); // удаляем геолокацию
   map.controls.remove('searchControl'); // удаляем поиск
   map.controls.remove('trafficControl'); // удаляем контроль трафика
   map.controls.remove('typeSelector'); // удаляем тип
   // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
   // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
   map.controls.remove('rulerControl'); // удаляем контрол правил
   // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

   map.geoObjects.add(placemark);
}

ymaps.ready(init);

// попапы
const popupLinks = document.querySelectorAll('.popup-link');
// коллекция форм, при оправке которых открывается попап
const submitForms = document.querySelectorAll('#free-project, #cost-composition, #more-questions');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

// определяем текущий попап по нажатой ссылке
if (popupLinks.length > 0) {
   for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

// закрытие попапа при нажатии на кнопку
const popupCloseLink = document.querySelectorAll('.close-popup');
if (popupCloseLink.length > 0) {
   for (let i = 0; i < popupCloseLink.length; i++) {
      const el = popupCloseLink[i];
      el.addEventListener("click", function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

// открытие текущего попапа по полученной ссылке
function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}

// при попапах внутри других попапов
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnlock();
      }
   }
}

// вызов попапа успешной отправки формы
if (submitForms.length > 0) {
   const successfullyPopup = document.getElementById('successfully-popup');
   for (let i = 0; i < submitForms.length; i++) {
      const submitForm = submitForms[i];
      submitForm.addEventListener("submit", function (e) {
         popupOpen(successfullyPopup);
         e.preventDefault();
      });
   }
}

// закрываем попап клавишей Esc
document.addEventListener("keydown", function (e) {
   if (e.keyCode == 27) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive)
         popupClose(popupActive);
   }
});

(function () {
   // проверяем поддержку 
   if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   // проверяем поддержку 
   if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.mozmatchesSelector ||
         Element.prototype.matchesSelector;
   }
})();

// скрываем скролл, добавляя паддинг body и объектам с position: fixed
function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
         const el = lockPadding[i];
         el.getElementsByClassName.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

// открываем скролл и убираем паддинг у body и объектов с position: fixed
function bodyUnlock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}
