import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/moviesApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import CastCard from 'components/CastCard/CastCard';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      setIsLoading(true);
      try {
        const movieCredits = await getMovieDetails(movieId, '/credits');
        setMovieCast(movieCredits.cast);
      } catch (error) {
        toast.error('Problem with API: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <CastList>
        {movieCast.map(({ character, name, profile_path, id }) => (
          <CastCard key={id} character={character} name={name} profile_path={profile_path} />
        ))}
      </CastList>
    </>
  );
};

export default Cast;
