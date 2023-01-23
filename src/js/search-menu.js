// FT-10 Реалізувати пошук та відображення фільмів за ключовим словом
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MoviesApiService from './modal';
import makeFilmsMarkup from './markup';

const refs = {
  searchForm: document.querySelector("#search-form"),
    searchInput: document.querySelector('.form-search__input'),
   warningField: document.querySelector('.js-warning'),
  btnSearch: document.querySelector('.search-form-button')
}

refs.searchForm.addEventListener('submit', onSubmit);


function onSubmit(e) {

  e.preventDefault();

  const value = e.currentTarget.elements.search.value;


    if (!value) {
    Notify.failure('Please type something');
    return;
    }
    

  
  const filmsApi = new MoviesApiService();
filmsApi.query = `${value}`;
async function getSearchFilm() {
   const response = await filmsApi.getSearchFilms();
  const films = await response.results;
    makeFilmsMarkup(films);
  return films;
}
getSearchFilm();
    e.target.reset();
    
}


 


