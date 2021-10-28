import { Link } from 'react-router-dom';
import React from 'react';
import s from './FilmListItem.module.css';

const FilmListItem = ({ title, poster, id }) => {
  return (
    <li className={s.list_item}>
      <Link to={`/movies/${id}`} className={s.link}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          loading="lazy"
          className={s.image}
        />
        <p className={s.title}>{title}</p>
      </Link>
    </li>
  );
};

export default FilmListItem;
