import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/moviesApi';
import { toast } from 'react-toastify';
import { MovieList, Title } from './Home.styled';
import MovieCard from 'components/MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        toast.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Title>Trending today</Title>
      <MovieList>
        {movies.map(({ id, title, poster_path }) =>
          title ? (
            <MovieCard
              location={location}
              key={id}
              id={id}
              title={title}
              posterPath={poster_path}
            />
          ) : null
        )}
      </MovieList>
    </>
  );
};

export default Home;
