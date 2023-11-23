import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/moviesApi';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const movieCredits = await getMovieDetails();
        console.log(movieCredits);
      } catch (error) {
        console.log(error);
      }
    };
  });

  return <ul></ul>;
};

export default Cast;
