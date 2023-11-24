import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/moviesApi';
import { toast } from 'react-toastify';
import { MovieList, Title } from './Home.styled';
import MovieCard from 'components/MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        toast.error('Error fetching data:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MovieList>
        {movies.map(({ id, title, poster_path }) =>
          title ? <MovieCard location={location} key={id} id={id} title={title} posterPath={poster_path}/> : null
        )}
      </MovieList>
    </>
  );
};

export default Home;
