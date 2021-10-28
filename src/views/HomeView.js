import { useState, useEffect } from 'react';
import API from '../api/apiService';
import FilmList from 'components/FilmList/FilmList';
import Loader from 'react-loader-spinner';

const apiService = new API();

export default function HomeView() {
  const [films, setFilms] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    apiService.fetchPopularFilms().then(({ results }) => {
      setFilms([...results]);
      setShowLoader(false);
    });
  }, []);

  return (
    <>
      {showLoader && (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
          // timeout={500}
          style={{ textAlign: 'center' }}
        />
      )}
      {films && <FilmList films={films} />}
    </>
  );
}
