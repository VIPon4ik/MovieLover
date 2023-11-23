import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/moviesApi';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_PATH } from 'constants';
import { toast } from 'react-toastify';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const movieCredits = await getMovieDetails(movieId, '/credits');
        setMovieCast(movieCredits.cast);
      } catch (error) {
        toast.error("Problem with API: ", error);      }
    };

    getMovieCast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <ul>
      {movieCast.map(({ character, name, profile_path, id }) => (
        <li key={id}>
          <img
            src={`${IMAGE_BASE_PATH}${profile_path}`}
            alt={`${name}`}
            width={100}
          />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
