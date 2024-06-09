import React from 'react';
import { FaStar } from 'react-icons/fa';
import IconContainer from '~src/components/common/primitive/IconContainer';

const Rating = ({ rating, maxRating = 10 }: { rating: number; maxRating?: number }) => {
  return (
    <IconContainer>
      <FaStar color="red" />
      {`${rating % 1 !== 0 ? rating.toFixed(1) : rating} / ${maxRating}`}
    </IconContainer>
  );
};

export default Rating;
