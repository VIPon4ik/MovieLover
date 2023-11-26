import React, { useEffect, useState } from 'react';
import { getMovies } from 'api/moviesApi';
import { toast } from 'react-toastify';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { MovieList } from '../Home/Home.styled';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import { Form, Input, SearchButton } from './Movies.styled';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const initializateData = async () => {
      if (location.search) {
        if (location.search.slice(0, 7) !== '?query=') {
          navigate('/queryError', { replace: true });
          return;
        }
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
    setIsLoading(true);
    try {
      const data = await getMovies(query);
      setMovies(data.results);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <SearchButton type="submit">Search</SearchButton>
      </Form>
      <MovieList>
        {movies.map(({ id, title, poster_path }) => (
          <MovieCard
            location={location}
            key={id}
            id={id}
            title={title}
            posterPath={poster_path}
          />
        ))}
      </MovieList>
    </>
  );
};

export default Movies;
