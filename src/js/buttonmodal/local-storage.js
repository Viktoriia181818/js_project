// import makingMarkup from ю ;

const header = document.querySelector('.page-header');
function insertFilmsLibrary(filmsMarkup) {
    header.insertAdjacentHTML('afterend', filmsMarkup);
  }
 

//   Код для кнопок
  export function getWatchedFilms() {
      try {
          const saveFilms = localStorage.getItem('watched');
          const parsedFilms = JSON.parse(saveFilms);

          const renderWatched = makingMarkup(parsedFilms);
          insertFilmsLibrary(renderWatched);
      } catch (error) {
          console.log(error);
      }
  }
//   Код для кнопок
  export function getQueueFilms () {
      try {
          const saveFilms = localStorage.getItem('queue');
          const parsedFilms = JSON.parse(saveFilms);

          const renderQueue = makingMarkup(parsedFilms);
          insertFilmsLibrary(renderQueue);
      } catch (error) {
          console.log(error);
      }
}
  const header = document.querySelector('.page-header');
function insertFilmsLibrary(filmsMarkup) {
    header.insertAdjacentHTML('afterend', filmsMarkup);
  }
 
 