import React, { useEffect, useState } from 'react';
import { getMovies } from 'api/moviesApi';
import { toast } from 'react-toastify';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
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
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
