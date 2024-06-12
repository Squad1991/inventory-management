import React from 'react';
import { FaStar } from 'react-icons/fa';
import IconContainer from '~src/components/common/primitive/IconContainer';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';

interface RatingProps extends ComponentPropsWithTestId {
  /** Rating of the movie */
  rating: number;
  /** Default to 10 */
  maxRating?: number;
}

/**
 * Rating component to display the rating of a movie
 */

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 10, testId }) => {
  return (
    <IconContainer data-testid={testId}>
      <FaStar color="red" />
      {rating === 0 ? 'NA' : `${rating % 1 !== 0 ? rating.toFixed(1) : rating} / ${maxRating}`}
    </IconContainer>
  );
};

export default React.memo(Rating);
