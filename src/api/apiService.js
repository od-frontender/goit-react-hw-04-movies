const API_KEY = 'e942a76391bf600d8ff506ebfde7cc4d';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class API {
  constructor() {
    this.page = 1;
  }
  // Запрос на популярные фильмы основной страницы
  fetchPopularFilms() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
  // Запрос на получение полной информации о фильме
  fetchAllInfoAboutFilm(movie_id) {
    return fetch(
      `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
    )
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
  // Запрос на получение информации по поиску
  fetchFilmsToId(searchQuery, page) {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`,
    )
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
  // Запрос информации о актёрском составе
  fetchFilmsActors(movie_id) {
    return fetch(
      `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`,
    )
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
  fetchFilmsReviews(movie_id) {
    return fetch(
      `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
}
