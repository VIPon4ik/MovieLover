import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa6';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { getMovieDetails } from 'api/moviesApi';
import {
  ImageContainer,
  NoPoster,
  RatingText,
  MovieLink,
  MovieLinkList,
} from './MovieDetails.styled';
import { IMAGE_BASE_PATH, COLORS } from 'constants';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const getBackLink = () => {
    if (location.state?.from.pathname === '/') {
      return '/';
    }

    return location.state?.from.search
      ? `/movies${location.state.from.search}`
      : '/movies';
  };

  const backLink = useRef(getBackLink());

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        toast.error('Problem with API: ', error);
        navigate('/notExist')
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MovieLink to={`${backLink.current}`}>
        <FaLongArrowAltLeft />
        Go back
      </MovieLink>
      <ImageContainer>
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_PATH}${movie.poster_path}`}
            alt={`${movie.title} poster`}
            width={300}
            height={450}
          />
        ) : (
          <NoPoster>No poster</NoPoster>
        )}
        <div>
          <h1>{movie.title}</h1>
          <RatingText>
            <FaStar fill={COLORS.dark_red} /> {movie.vote_average}
          </RatingText>
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
      <MovieLinkList>
        <li>
          <MovieLink to="cast">Cast</MovieLink>
        </li>
        <li>
          <MovieLink to="reviews">Reviews</MovieLink>
        </li>
      </MovieLinkList>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
