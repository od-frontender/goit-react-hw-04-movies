import {
  useParams,
  useRouteMatch,
  Link,
  Route,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from 'api/apiService';
import Reviews from 'components/Reviews/Reviews';
import Cast from 'components/Cast/Cast';
import s from './FilmDetalsView.module.css';

const apiService = new API();

export default function FilmDetalsView() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    apiService.fetchAllInfoAboutFilm(movieId).then(setFilm);
  }, [movieId]);

  function goBack() {
    const valueURL = history.location.pathname;

    if (valueURL.includes('cast') || valueURL.includes('reviews')) {
      history.go(-1);
    }

    history.goBack();
  }

  return (
    <>
      <button onClick={goBack} className={s.button}>
        go back
      </button>
      <br />
      {film && (
        <div className={s.film}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            loading="lazy"
            alt={film.title}
            className={s.picture}
          />
          <div className={s.description}>
            <h2 className={s.title}>{film.title}</h2>
            <p className={s.tittle_item}>
              Genres: {film.genres.map(({ name }) => name).join(', ')}
            </p>
            <p className={s.tittle_item}>Movie rating: {film.vote_average}</p>
            <p className={s.text}>{film.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <h2>Additional information:</h2>
      <ul className={s.list}>
        <li className={s.list_item}>
          <Link to={`${url}/cast`} className={s.link}>
            <h3 className={s.link_title}>Cast</h3>
          </Link>
        </li>
        <li className={s.list_item}>
          <Link to={`${url}/reviews`} className={s.link}>
            <h3 className={s.link_title}>Reviews</h3>
          </Link>
        </li>
      </ul>
      <Route path={`${url}/cast`}>
        <Cast movieId={movieId} />
      </Route>
      <Route path={`${url}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}
