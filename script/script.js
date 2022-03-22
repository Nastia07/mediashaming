let swiperLength = document.getElementsByClassName("war_info__slider").length;
if (swiperLength > 0) {
  var swiper = new Swiper(".war_info__slider", {
    watchOverflow: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3500,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      700: {
        slidesPerView: 2,
      },

      900: {
        slidesPerView: 3,
      },

      1280: {
        slidesPerView: 4,
      },
    },
  });
}
