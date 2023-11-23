import React, { useRef } from 'react';
import { getTrendingMovies } from 'api/moviesApi';

const Home = () => {
  const movies = useRef(() => getTrendingMovies());
  console.log(movies.current)
  return (
    <>
      <h1>Trending today</h1>
      <ul></ul>
    </>
  );
};

export default Home;
