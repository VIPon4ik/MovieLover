import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PageNotFound from './PageNotFound/PageNotFound';
import { COLORS, DARK_COLORS } from 'constants';
import { ThemeProvider } from 'styled-components';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) ?? false
  );

  const handleThemeChange = () => {
    localStorage.setItem('theme', JSON.stringify(!theme));
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? DARK_COLORS : COLORS}>
      <Routes>
        <Route path="/" element={<Layout handleThemeChange={handleThemeChange} theme={theme} />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
