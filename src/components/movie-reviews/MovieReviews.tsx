import { styled } from '@compiled/react';
import React from 'react';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import Stack from '~src/components/common/primitive/Stack';
import MovieReviewCard from '~src/components/movie-reviews/MovieReviewCard';
import { MovieReview } from '~src/routes/movie/types';

interface MovieReviewsProps {
  reviews: MovieReview[];
}

const StyledMovieReview = styled(Stack)({
  gap: '1rem',
});

const MovieReviews: React.FC<MovieReviewsProps> = props => {
  const { reviews } = props;

  if (!reviews.length) {
    return <EmptyCard testId="no-movies-msg" message="No reviews found" />;
  }

  return (
    <StyledMovieReview>
      {reviews.map(review => (
        <MovieReviewCard testId={`review-${review.id}`} key={review.id} review={review} />
      ))}
    </StyledMovieReview>
  );
};

export default React.memo(MovieReviews);
