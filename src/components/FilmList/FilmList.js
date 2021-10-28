import FilmListItem from '../FilmListItem/FilmListItem';
import PropTypes from 'prop-types';
import s from './FilmList.module.css';

const FilmList = ({ films }) => {
  return (
    <ul className={s.FilmList}>
      {films.map(({ title, id, poster_path }) => {
        return (
          <FilmListItem
            key={id}
            title={title}
            id={id}
            poster={poster_path}
            className={s.list_link}
          />
        );
      })}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList;
