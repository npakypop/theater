const heroSwiper = new Swiper('.heroSwiper', {
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 'auto',
    },
  },
});

const partnersSwiper = new Swiper('.partnersSwiper', {
  grid: {
    rows: 2,
  },
  // autoplay: {
  //   delay: 1000,
  // },
  loop: true,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 1.9,
    },
    768: {
      slidesPerView: 2.6,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
menuBtn.addEventListener('click', function () {
  mobileMenu.classList.add('is-active');
});
closeBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('is-active');
});
// mobileLink.addEventListener('click', function () {
//   mobileMenu.classList.remove('is-active');
// });
mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('is-active');
  });
});
