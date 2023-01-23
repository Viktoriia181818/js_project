import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MoviesApiService from './modal';
import genresInfo from './genre-list';

const filmsApi = new MoviesApiService();
let filmId = 843794;

const filmsItemEl = document.querySelector('.js-card');
const modalBackdropEl = document.querySelector('.modal__backdrop');
const modalCloseBtnEl = document.querySelector('.modal__close-btn');
const modalEl = document.querySelector('.modal-js');

filmsItemEl.addEventListener('click', onShowModal);
modalCloseBtnEl.addEventListener('click', onClosedModal);
modalBackdropEl.addEventListener('click', onCloseModal);

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

function onShowModal(e) {
  modalBackdropEl.classList.remove('is-hidden');
  filmId = e.target.closest('li').dataset.id;
  getFilmDetails(filmId);
}
function onCloseModal(e) {
  if (e.target.className == 'modal__backdrop') {
    modalBackdropEl.classList.add('is-hidden');
  }
}
function onClosedModal(e) {
  modalBackdropEl.classList.add('is-hidden');
}

async function getFilmDetails(filmId) {
  const film = await filmsApi.getFilmDetails(filmId);
  markupModal(film);
}
function markupModal(film) {
  const genre = film.genres;
  let filmGenres;
  if (film.genres) {
    filmGenres = film.genres.map(el => el.name).join(', ');
  }

  modalEl.innerHTML = `<div class="film__image">
      <img
        class="image"
        src='https://image.tmdb.org/t/p/original${film.poster_path}'
        alt="Avatar: the way of water"
      />
    </div>
    <div class="film__information">
      <div>
        <h2 class="film__title">${film.title}</h2>
        <ul>
          <li class="film__item">
            <p class="film__details">Vote / Votes</p>
            <p class="film__info--uper">
              <span class="film__rating--orange">${film.vote_average}</span>
              <span class="film__rating--divider"> / </span>
              <span class="vote-count">${film.vote_count}</span>
            </p>
          </li>
          <li class="film__item">
            <p class="film__details">Popularity</p>
            <p class="film__info--uper">${film.popularity}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Original title</p>
            <p class="film__details-title">${film.original_title}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Genre</p>
            <p class="film__info">${filmGenres}</p>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="film__about__title">About</h3>
        <p class="film__about__text">
         ${film.overview}
        </p>
      </div>
        <div class="film__button__wrapper" data-key="" data-filmid="">
          <button
            type="button"
            class="film__button btn__watch"
            data-addaction="watched"
          >
            Add to watched
          </button>
          <button
            type="button"
            class="film__button btn__queue"
            data-addaction="queue"
          >
            Add to queue
          </button>
        </div>
        <div class="film__trailer">
          <a class="btn btn-large btn-primary film__trailer__btn" href="#">
            <p class="film__trailer__text">watch trailer</p>
          </a>
        </div>
      </div>
    `;
}
