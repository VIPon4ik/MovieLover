import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/moviesApi';
import { Link, useParams, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ImageContainer } from './MovieDetails.styled';
import { IMAGE_BASE_PATH } from 'constants';



const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        toast.error('Problem with API: ', error);
      }
    };

    fetchMovieDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Link>Go back</Link>
      <ImageContainer>
        <img
          src={`${IMAGE_BASE_PATH}${movie.poster_path}`}
          alt={`${movie.title} poster`}
          width={300}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres &&
              movie.genres.map(({ name }) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      </ImageContainer>
      <hr />
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
