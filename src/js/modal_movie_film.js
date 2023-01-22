// FT-17 Після натискання на картку фільму на будь-якій сторінці повинна відкриватися
//  модалка з динамічно підставленою
//  інформацією про фільм

// Відкриття/закриття модалки

const filmsItemEl = document.querySelector('.js-card');
const modalBackdropEl = document.querySelector('.modal__backdrop');
const modalCloseBtnEl = document.querySelector('.modal__close-btn');
document.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    modalBackdropEl.classList.add('is-hidden');
    console.log(event.keyCode === 27);
  }
});
// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });
filmsItemEl.addEventListener('click', onShowModal);

modalCloseBtnEl.addEventListener('click', onClosedModal);
modalBackdropEl.addEventListener('click', onCloseModal);

function onShowModal(e) {
  console.log(e.currentTarget);
  modalBackdropEl.classList.remove('is-hidden');
  console.log(e.target);
}
function onCloseModal(e) {
  if (e.target.className == 'modal__backdrop') {
    modalBackdropEl.classList.add('is-hidden');
    console.log(e.target);
  }
}
function onClosedModal(e) {
  modalBackdropEl.classList.add('is-hidden');
}
