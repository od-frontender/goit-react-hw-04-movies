import { useState, useEffect } from 'react';
import API from 'api/apiService';
import s from './Cast.module.css';

const apiService = new API();

export default function Cast({ movieId }) {
  const [actors, setActor] = useState(null);

  useEffect(() => {
    apiService.fetchFilmsActors(movieId).then(res => setActor(res.cast));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {actors &&
        actors
          .map(actor => {
            return (
              <li key={actor.id} className={s.list_item}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  className={s.image}
                  alt={actor.name}
                ></img>
                <p className={s.title}>{actor.name}</p>
              </li>
            );
          })
          .slice(1, 10)}
    </ul>
  );
}
