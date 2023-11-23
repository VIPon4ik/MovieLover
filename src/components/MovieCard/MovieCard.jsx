import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, posterPath }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MovieCard;
