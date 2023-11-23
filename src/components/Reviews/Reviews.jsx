import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/moviesApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const movieReviews = await getMovieDetails(movieId, '/reviews');
        setMovieReviews(movieReviews.results ?? []);
      } catch (error) {
        toast.error("Problem with API: ", error);
      }
    };

    getMovieReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {<p>We don't have any reviews on this movie</p> && movieReviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
