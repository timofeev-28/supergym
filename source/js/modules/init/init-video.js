const videoBtn = document.querySelector('[data-video-btn]');
const iframe = document.querySelector('[data-iframe]');
const poster = document.querySelector('[data-poster]');

const showIframe = () => {
  const btnClickHendler = (event) => {
    event.preventDefault();
    iframe.style.display = 'block';
    videoBtn.style.display = 'none';
    poster.style.display = 'none';
  };

  videoBtn.addEventListener('click', btnClickHendler);
};

const initVideoBtn = () => {
  if (iframe && videoBtn) {
    showIframe();
  }
};

export {initVideoBtn};
