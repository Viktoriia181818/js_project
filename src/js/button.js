const refs = {
  btnListLibrary: document.querySelector('.header-library__btn-list'),
  watchedBtn: document.querySelector('#watched-btn'),
  queueBtn: document.querySelector('#queue-btn'),
};

refs.btnListLibrary.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  if (e.target === refs.watchedBtn) {
    e.target.classList.add('header-library__btn--active');
    refs.queueBtn.classList.remove('header-library__btn--active');

    e.target.disabled = true;
    refs.queueBtn.disabled = false;
  } else if (e.target === refs.queueBtn) {
    e.target.classList.add('header-library__btn--active');
    refs.watchedBtn.classList.remove('header-library__btn--active');

    e.target.disabled = true;
    refs.watchedBtn.disabled = false;
  }
}
