import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_PATH } from 'constants';
import { MovieTitle, MovieListItem, NoPoster } from './MovieCard.styled';

const MovieCard = ({ id, title, posterPath, location }) => {
  return (
    <MovieListItem>
      <Link
        to={`/movies/${id}`}
        style={{ textDecoration: 'none' }}
        state={{ from: location }}
      >
        {posterPath ? (
          <img
            src={`${IMAGE_BASE_PATH}${posterPath}`}
            alt={`${title} poster`}
            width={280}
            height={420}
          />
        ) : (
          <NoPoster>No poster</NoPoster>
        )}
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </MovieListItem>
  );
};

export default MovieCard;
