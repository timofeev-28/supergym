const buttonPeriods = document.querySelectorAll('[data-price-control]');
const prices = document.querySelectorAll('[data-price]');
const backgroundPrices = document.querySelectorAll('[data-price-bcg]');
const lesson = document.querySelector('[data-lessons]');

const pricesPerPeriods = [
  // Цены для 1 месяца
  [5000, 1700, 2700],

  // Цены для 6 месяцев
  [30000, 10200, 16200],

  // Цены для 12 месяцев
  [60000, 20400, 32400]
];

// количество занятий с тренером для разных периодов
const lessonsPerPeriods = ['12 занятий', '72 занятия (12/мес)', '144 занятия (12/мес)'];

const initPrices = () => {
  buttonPeriods[0].classList.add('is-active');

  buttonPeriods.forEach((button, index) => {

    button.addEventListener('click', function () {
      lesson.textContent = lessonsPerPeriods[index];

      prices.forEach((price, indexPrice) => {
        price.textContent = pricesPerPeriods[index][indexPrice];
      });

      backgroundPrices.forEach((price, indexPrice) => {
        price.textContent = pricesPerPeriods[index][indexPrice];
      });

      buttonPeriods.forEach((btn) => {
        btn.classList.remove('is-active');
      });

      button.classList.add('is-active');
    });
  });
};

export {initPrices};
