import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_PATH } from 'constants';
import { MovieTitle, MovieListItem } from './MovieCard.styled';

const MovieCard = ({ id, title, posterPath }) => {
  return (
    <MovieListItem>
      <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
        <img src={`${IMAGE_BASE_PATH}${posterPath}`} alt={`${title} poster`} />
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </MovieListItem>
  );
};

export default MovieCard;
