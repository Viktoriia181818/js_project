import MoviesApiService from './modal';
import makeFilmsMarkup from './markup';
import { renderPagination } from './pagination';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const filmsApi = new MoviesApiService();

getFilm();

async function displayList(wrapper, page) {
  filmsApi.page = page;
  wrapper.innerHTML = '';
  try {
    const response = await filmsApi.getPopularFilms();
    const films = await response.results;
    Loading.remove(250);
    makeFilmsMarkup(films);
  } catch {
    console.log;
  }
}

async function getFilm() {
  Loading.dots({
    backgroundColor: 'rgba(84, 84, 84, 0.5)',
    svgColor: '#FF6B08',
    svgSize: '80px',
  });
  try {
    const response = await filmsApi.getPopularFilms();
    const films = await response.results;
    Loading.remove(250);
    makeFilmsMarkup(films);
    renderPagination(response.total_pages, films, displayList);
    Loading.remove(250);
  } catch {
    console.log;
  }
}
