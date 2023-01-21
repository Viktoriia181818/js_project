import MoviesApiService from './modal';
import makeFilmsMarkup from './markup';

const filmsApi = new MoviesApiService();

getFilm();

async function getFilm() {
  const response = await filmsApi.getPopularFilms();
  const films = await response.results;

  makeFilmsMarkup(films);
}
