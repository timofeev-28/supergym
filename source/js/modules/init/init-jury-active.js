import {isDesktop} from '../../utils/check-desktop';

const juryCards = document.querySelectorAll('[data-jury]');
const juryCard = document.querySelector('[data-jury]');

const deleteIsActive = () => {
  juryCards.forEach((card) => {
    card.classList.remove('is-active');
  });
};

const setJuryActive = () => {
  juryCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => {
      if (!card.closest('.is-active') && !isDesktop.matches) {
        deleteIsActive();
        card.classList.add('is-active');

        document.body.addEventListener('click', function documentClickHandler(event) {
          if (!event.target.closest('[data-jury]')) {
            card.classList.remove('is-active');
            document.body.removeEventListener('click', window.documentClickHandler);
          }
        });
      } else {
        card.classList.remove('is-active');
        document.body.removeEventListener('click', window.documentClickHandler);
      }
    });
  });
};

const initJuryActive = () => {
  if (juryCard !== null) {
    setJuryActive();
  }
};

export {initJuryActive};
