document.addEventListener("DOMContentLoaded", function (event) {
  let swiperLength = document.getElementsByClassName("war_info__slider").length;
  if (swiperLength > 0) {
    var swiper = new Swiper(".war_info__slider", {
      watchOverflow: true,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 0,
      },
      spaceBetween: 10,
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
});
