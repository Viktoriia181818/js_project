import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b3f8ab5a3b3d716ab8a62d65695cca6b';
export default class MoviesApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  async getPopularFilms() {
    try {
      const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error) {
      Notify.failure('Oops, an error occurred');
    }
  }
}