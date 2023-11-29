import React from 'react';
import { NotFoundTitle } from './PageNotFound.styled';
import { MovieLink } from 'pages/MovieDetails/MovieDetails.styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <>
      <MovieLink to='/'>
        <FaLongArrowAltLeft />
        Home
      </MovieLink>
      <NotFoundTitle>Page do not exist</NotFoundTitle>
    </>
  );
};

export default PageNotFound;
