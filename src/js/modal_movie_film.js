// FT-17 Після натискання на картку фільму на будь-якій сторінці повинна відкриватися
//  модалка з динамічно підставленою
//  інформацією про фільм
const filmsItemEl = document.querySelector('.js-card');
const modalBackdropEl = document.querySelector('.modal__backdrop');
const modalCloseBtnEl = document.querySelector('.modal__close-btn');
filmsItemEl.addEventListener('click', onShowModal);
modalCloseBtnEl.addEventListener('click', onClosedModal);
modalBackdropEl.addEventListener('click', onCloseModal);
function onShowModal(e) {
  modalBackdropEl.classList.remove('is-hidden');
}
function onCloseModal(e) {
  if (e.target.className == 'modal__backdrop') {
    modalBackdropEl.classList.add('is-hidden');
  }
}
function onClosedModal(e) {
  modalBackdropEl.classList.add('is-hidden');
}
