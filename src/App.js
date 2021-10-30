import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
// import HomeView from 'views/HomeView';
// import MoviesView from 'views/MoviesView';
// import NotFoundView from 'views/NotFoundView';
import FilmDetalsView from 'components/FilmDetalsView/FilmDetalsView';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "MoviesView" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Suspense
          fallback={
            <Loader
              type="Oval"
              color="#00BFFF"
              height={70}
              width={70}
              style={{ textAlign: 'center' }}
            />
          }
        >
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
        </Suspense>
      </Container>
      <ToastContainer />
    </>
  );
}
export default App;
