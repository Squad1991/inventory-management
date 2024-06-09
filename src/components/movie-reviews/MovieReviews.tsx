import { styled } from '@compiled/react';
import React, { useEffect, useState } from 'react';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import Stack from '~src/components/common/primitive/Stack';
import { fetchData } from '~src/components/common/utils/API';
import MovieReviewCard from '~src/components/movie-reviews/MovieReviewCard';
import { MovieReviewReponse } from '~src/routes/movie/types';

interface MovieReviewsProps {
  movieId: number;
}

const StyledMovieReview = styled(Stack)({
  gap: '1rem',
});

const MovieReviews: React.FC<MovieReviewsProps> = props => {
  const { movieId } = props;
  const [reviews, setReviews] = useState<MovieReviewReponse['results']>([]);
  const fetchReviews = async (movieId: number) => {
    const { results = [] } = await fetchData<MovieReviewReponse>({
      url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    });
    setReviews(results);
  };

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId]);

  if (!reviews.length) {
    return <EmptyCard message="No reviews found" />;
  }

  return (
    <StyledMovieReview>
      {reviews.map(review => (
        <MovieReviewCard key={review.id} review={review} />
      ))}
    </StyledMovieReview>
  );
};

export default MovieReviews;
