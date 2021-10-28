import { useState, useEffect } from 'react';
import API from 'api/apiService';
import Searchbar from 'components/Searchbar/Searchbar';
import FilmList from 'components/FilmList/FilmList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Button from 'components/Button/Button';

const apiService = new API();

export default function MoviesView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filmsView, setFilm] = useState([]);
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
  };
  const handleIncrement = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    apiService
      .fetchFilmsToId(searchQuery, page)
      .then(({ results, total_pages }) => {
        if (page === 1) {
          setFilm(results);
        } else {
          setFilm(prevFilms => [...prevFilms, ...results]);
        }
        setTotal(total_pages);

        setStatus('resolved');

        if (!total) {
          setError('No results found');
          setStatus('rejected');
        } else {
          setError(null);
        }
      });
  }, [searchQuery, page, total]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'rejected' && <ErrorMessage message={error} />}
      {filmsView && <FilmList films={filmsView} />}
      {total > 12 && status === 'resolved' && (
        <Button onClick={handleIncrement} />
      )}
    </>
  );
}
