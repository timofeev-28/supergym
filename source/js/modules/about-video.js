const initVideoBtn = () => {
  if (document.body.contains(document.querySelector('[data-iframe]'))) {
    showIframe();
  }

  function showIframe() {
    const videoBtn = document.querySelector('[data-video-btn]');
    const iframe = document.querySelector('[data-iframe]');
    const poster = document.querySelector('[data-poster]');

    const btnClickHendler = () => {
      iframe.style.display = 'block';
      videoBtn.style.display = 'none';
      poster.style.display = 'none';
    };

    videoBtn.addEventListener('click', btnClickHendler);
  }
};

export {initVideoBtn};
