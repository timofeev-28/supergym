import Swiper from '../../vendor/swiper';

const sliderReviews = document.querySelector('[data-swiper="reviews"]');
const buttonNext = document.querySelector('[data-button="reviews-next"]');
const buttonPrev = document.querySelector('[data-button="reviews-prev"]');

const reviewsSliderOptions = {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  slidesPerView: 1,
  loop: false,
  speed: 700,
};

const initReviewsSlider = () => {
  if (!sliderReviews) {
    return null;
  }

  return new Swiper(sliderReviews, reviewsSliderOptions);
};

export {initReviewsSlider};
