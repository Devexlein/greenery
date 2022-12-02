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

/*  поодключение карты  */
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