import React, { useEffect, useState } from 'react';
import { getMovies } from 'api/moviesApi';
import { toast } from 'react-toastify';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieList } from './Home.styled';
import MovieCard from 'components/MovieCard/MovieCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const initializateData = async () => {
      if (location.search) {
        const query = location.search.slice(7);
        await getMoviesData(query);
      }
    };

    initializateData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const { query } = e.target.elements;

    await getMoviesData(query.value).finally(() =>
      setSearchParams({ query: query.value })
    );

    e.target.reset();
  };

  const getMoviesData = async query => {
    try {
      const data = await getMovies(query);
      setMovies(data.results);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <MovieList>
        {movies.map(({ id, title, poster_path }) => (
          <MovieCard location={location} key={id} id={id} title={title} posterPath={poster_path}/>
        ))}
      </MovieList>
    </>
  );
};

export default Movies;
