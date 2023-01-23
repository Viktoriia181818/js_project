// FT-10 Реалізувати пошук та відображення фільмів за ключовим словом
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MoviesApiService from './modal';
import makeFilmsMarkup from './markup';
import { renderPagination } from './pagination';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const filmsApi = new MoviesApiService();
const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('.form-search__input'),
  warningField: document.querySelector('.js-warning'),
  btnSearch: document.querySelector('.search-form-button'),
};

refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.search.value;

  if (!value) {
    Notify.failure('Please type something');
    return;
  }

  filmsApi.query = `${value}`;
  async function getSearchFilm() {
    Loading.dots({
      backgroundColor: 'rgba(84, 84, 84, 0.5)',
      svgColor: '#FF6B08',
      svgSize: '80px',
    });
    const response = await filmsApi.getSearchFilms();
    const films = await response.results;

    makeFilmsMarkup(films);
    renderPagination(response.total_pages, films, displayList);
    Loading.remove(250);
    return films;
  }
  getSearchFilm();
  e.target.reset();
}

async function displayList(wrapper, page) {
  filmsApi.page = page;
  wrapper.innerHTML = '';
  try {
    const response = await filmsApi.getSearchFilms();
    const films = await response.results;
    Loading.remove(250);
    makeFilmsMarkup(films);
  } catch {
    console.log;
  }
}
