import { Switch, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import NotFoundView from 'views/NotFoundView';
import FilmDetalsView from 'components/FilmDetalsView/FilmDetalsView';

function App() {
  return (
    <>
      <Container>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <FilmDetalsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
      <ToastContainer />
    </>
  );
}
export default App;
