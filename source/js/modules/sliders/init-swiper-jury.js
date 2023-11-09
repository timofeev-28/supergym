const sliderJury = document.querySelector('[data-swiper="jury"]');
const buttonNext = document.querySelector('[data-button="jury-next"]');
const buttonPrev = document.querySelector('[data-button="jury-prev"]');

const setSliderJury = () => {
  return new window.Swiper(sliderJury, {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3000,
    },

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },

      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
    },
  });
};

const initJurySlider = () => {
  if (document.body.contains(sliderJury)) {
    setSliderJury();
  }
};

export {initJurySlider};
