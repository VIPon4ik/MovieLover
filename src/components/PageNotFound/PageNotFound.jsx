import React from 'react';
import { NotFoundTitle } from './PageNotFound.styled';
import { MovieLink } from 'pages/MovieDetails/MovieDetails.styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const PageNotFound = ({ children = 'Page do not exist'}) => {
  return (
    <>
      <MovieLink to='/'>
        <FaLongArrowAltLeft />
        Home
      </MovieLink>
      <NotFoundTitle>{children}</NotFoundTitle>
    </>
  );
};

export default PageNotFound;
