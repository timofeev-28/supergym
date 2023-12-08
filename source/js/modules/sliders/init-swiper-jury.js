import Swiper from '../../vendor/swiper';

const sliderJury = document.querySelector('[data-swiper="jury"]');
const buttonNext = document.querySelector('[data-button="jury-next"]');
const buttonPrev = document.querySelector('[data-button="jury-prev"]');

const setSliderJury = () => {
  const swiperJury = new Swiper(sliderJury, {
    loop: true,
    speed: 700,

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
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },

      0: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
    },
  });

  return swiperJury;
};

const initJurySlider = () => {
  if (document.body.contains(sliderJury)) {
    setSliderJury();
  }
};

export {initJurySlider};
