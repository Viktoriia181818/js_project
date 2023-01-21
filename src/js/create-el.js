import MoviesApiService from './modal';
import genresInfo from './genre-list';
const filmsListRef = document.querySelector('.films');
const filmsApi = new MoviesApiService();

getSearchFilm();

async function getSearchFilm() {
  const response = await filmsApi.getPopularFilms();
  const films = await response.results;

  makeFilmsMarkup(films);
  renderFilmsMarkup(films);
}

function makeFilmsMarkup(films) {
  const filmMarkup = films
    .map(
      ({ poster_path, title, release_date, genre_ids, vote_average, id }) => {
        let filmGenres;
        if (genre_ids) {
          filmGenres = genresInfo
            .filter(({ id }) => genre_ids.includes(id))
            .map(({ name }) => name)
            .join(', ');
        }

        return `<li class="films__item" data-id=${id}>
                  <div class="films__img">
                  <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" width="280" height="398" loading="lazy">
          </div>
                  <div class="films__description">
                    <p class="films__title">${title || 'Name'}</p>
                    <div class="films__meta">
                    <p class="films__genres">${filmGenres || 'Action'}</p>
                      <p class="films__data">${(release_date || '2023').slice(
                        0,
                        4
                      )}</p>
                      <span class="films__rating none">${vote_average || '-'}</span>
                    </div>
                  </div>
              </li>`;
      }
    )
    .join('');

  return filmMarkup;
}
function renderFilmsMarkup(films) {
  filmsListRef.innerHTML = makeFilmsMarkup(films);
}
