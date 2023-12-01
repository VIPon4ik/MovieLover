import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/moviesApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import ReviewItem from 'components/ReviewItem/ReviewItem';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      setIsLoading(true);

      try {
        const movieReviews = await getMovieDetails(movieId, '/reviews');
        setMovieReviews(movieReviews.results);
      } catch (error) {
        toast.error('Problem with API: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <ul>
        {movieReviews.length === 0 && isLoading === false ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          movieReviews.map(
            ({ author, content, id, author_details: { rating } }) => (
              <ReviewItem
                key={id}
                rating={rating}
                author={author}
                content={content}
              />
            )
          )
        )}
      </ul>
    </>
  );
};

export default Reviews;
