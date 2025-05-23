'use strict';
var m,
  divId,
  initLatitude,
  initLongitude,
  map,
  preloader = document.querySelector('.preloader');
preloader &&
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
var section = document.querySelectorAll('.section'),
  sections = {},
  currentActive = null;
function updateSections() {
  (sections = {}),
    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });
}
updateSections(),
  window.addEventListener('resize', updateSections),
  (window.onscroll = function () {
    var e = document.documentElement.scrollTop || document.body.scrollTop,
      t = null;
    for (let n in sections) sections[n] <= e + 48 && (t = n);
    if (t && t !== currentActive) {
      currentActive = t;
      var s = document.querySelector('.active');
      s && s.classList.remove('active');
      var o = document.querySelector(`.section-link[href*='${CSS.escape(t)}']`);
      o && o.classList.add('active');
    }
  });
var toggleMenu = $('.toggle-menu');
if (toggleMenu.length) {
  var e = $('.menu-btn'),
    t = $('.menu-close');
  e.on('click', function () {
    toggleMenu.hasClass('show')
      ? toggleMenu.removeClass('show')
      : toggleMenu.addClass('show');
  }),
    t.on('click', function () {
      toggleMenu.removeClass('show');
    }),
    $(document).on('click', function (e) {
      0 === $(e.target).closest('.toggle-menu, .menu-btn').length &&
        toggleMenu.hasClass('show') &&
        toggleMenu.removeClass('show');
    });
}
var swiper = new Swiper('.clients-swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: !0,
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 30 },
      992: { slidesPerView: 3, spaceBetween: 40 },
      1200: { slidesPerView: 5, spaceBetween: 40 },
    },
    autoplay: { delay: 2500, disableOnInteraction: !1 },
  }),
  swiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: { slidesPerView: 1, spaceBetween: 30 },
      992: { slidesPerView: 1, spaceBetween: 40 },
      1200: { slidesPerView: 2, spaceBetween: 40 },
    },
    navigation: {
      nextEl: '.swiper-testimonial-next',
      prevEl: '.swiper-testimonial-prev',
    },
    autoplay: { delay: 2500, disableOnInteraction: !1 },
  }),
  nCounter = $('.counter');
nCounter.length &&
  nCounter.appear(
    function () {
      $(this).each(function () {
        $(this)
          .prop('Counter', 0)
          .animate(
            { Counter: $(this).text() },
            {
              duration: 2400,
              easing: 'swing',
              step: function (e) {
                $(this).text(Math.ceil(e));
              },
            },
          );
      });
    },
    { accX: 0, accY: -10 },
  );
var pGrid = $('.portfolio-grid');
if (pGrid.length)
  var mixer = mixitup('.portfolio-grid', {
    selectors: { target: '.portfolio-item' },
    animation: { duration: 250 },
  });
const lightbox = GLightbox(),
  contactForm = document.getElementById('contactform');
contactForm &&
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(),
      fetch('assets/php/contact-form.php', {
        method: 'POST',
        body: new FormData(this),
      })
        .then((e) => e.json())
        .then((e) => {
          'success' === e.status
            ? (document.getElementById('success').classList.add('show-result'),
              contactForm.reset())
            : document.getElementById('error').classList.add('show-result');
        })
        .catch((e) => {
          document.getElementById('error').classList.add('show-result'),
            console.error('There was a problem with the fetch operation:', e);
        });
  });
var mapCanvas = $('.gmap');
if (mapCanvas.length)
  for (var i = 0; i < mapCanvas.length; i++)
    (initLatitude = (m = mapCanvas[i]).dataset.latitude),
      (initLongitude = m.dataset.longitude),
      (divId = '#' + m.id),
      (map = new GMaps({
        el: divId,
        lat: initLatitude,
        lng: initLongitude,
        zoom: 16,
        scrollwheel: !1,
        styles: [],
      })).addMarker({ lat: initLatitude, lng: initLongitude });
