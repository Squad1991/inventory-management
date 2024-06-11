import React from 'react';
import { FaStar } from 'react-icons/fa';
import IconContainer from '~src/components/common/primitive/IconContainer';

interface RatingProps {
  rating: number;
  maxRating?: number;
  testId?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 10, testId }) => {
  return (
    <IconContainer data-testid={testId}>
      <FaStar color="red" />
      {rating === 0 ? 'NA' : `${rating % 1 !== 0 ? rating.toFixed(1) : rating} / ${maxRating}`}
    </IconContainer>
  );
};

export default Rating;
