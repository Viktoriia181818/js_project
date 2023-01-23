// const filmsItemEl = document.querySelector('.js-card');
const backdropTeamEl = document.querySelector('.backdrop__team');
const footerLinkEl = document.querySelector('.footer__link');
const modalCloseTeamEl = document.querySelector('.modal__team-btn');
// const modalEl = document.querySelector('.modal-js');

footerLinkEl.addEventListener('click', onShowModal);
modalCloseTeamEl.addEventListener('click', onClosedModal);
backdropTeamEl.addEventListener('click', onCloseModal);

document.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    backdropTeamEl.classList.add('is-hidden');
    console.log(event.keyCode === 27);
  }
});

function onShowModal(e) {
  backdropTeamEl.classList.remove('is-hidden');
}
function onCloseModal(e) {
  if (e.target.className == 'backdrop__team') {
    backdropTeamEl.classList.add('is-hidden');
  }
}
function onClosedModal(e) {
  backdropTeamEl.classList.add('is-hidden');
}
