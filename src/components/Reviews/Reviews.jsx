import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/moviesApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const movieReviews = await getMovieDetails(movieId, '/reviews');
        console.log(movieReviews.results);
        setMovieReviews(movieReviews.results ?? []);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {movieReviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      )) && <p>We don't have any reviews on this movie</p>}
    </ul>
  );
};

export default Reviews;
