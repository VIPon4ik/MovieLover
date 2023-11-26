import React from 'react';
import { COLORS } from 'constants';
import { FaStar } from 'react-icons/fa6';
import { Rating, ReviewListItem } from './ReviewItem.styled';

const ReviewItem = ({ author, rating, content }) => {
  return (
    <ReviewListItem>
      <h3>
        {author}
        <Rating>
          {rating} <FaStar fill={COLORS.dark_red} />
        </Rating>
      </h3>
      <p>{content}</p>
    </ReviewListItem>
  );
};

export default ReviewItem;
