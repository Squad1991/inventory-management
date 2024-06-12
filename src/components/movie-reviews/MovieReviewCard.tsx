import { css, styled } from '@compiled/react';
import React from 'react';
import Avatar from '~src/components/common/avatar/Avatar';
import Rating from '~src/components/common/movie-rating/MovieRating';
import Box from '~src/components/common/primitive/Box';
import Card from '~src/components/common/primitive/Card';
import Inline from '~src/components/common/primitive/Inline';
import Stack from '~src/components/common/primitive/Stack';
import VerticalTextOverflow from '~src/components/common/primitive/VerticalTextOverflow';
import { timeAgo } from '~src/components/common/utils/date-utils';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';
import { MovieReview } from '~src/routes/movie/types';

interface MovieReviewCardProps extends ComponentPropsWithTestId {
  review: MovieReview;
}

const StyledMovieReviewCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  cursor: 'pointer',
  padding: '1rem',
});

const MovieReviewCard: React.FC<MovieReviewCardProps> = props => {
  const { review, testId } = props;

  const openReview = () => {
    window.open(`https://www.themoviedb.org/review/${review.id}`, '_blank');
  };

  return (
    <StyledMovieReviewCard data-testid={testId} onClick={openReview}>
      <Inline css={css({ justifyContent: 'space-between' })}>
        <Inline css={css({ gap: '1rem', alignItems: 'center' })}>
          <Avatar imageUrl={review.author_details.avatar_path} title={review.author} />
          <Stack>
            <Box data-testid="author">{review.author}</Box>
            <Box data-testid="date-updated">{timeAgo(review.updated_at)}</Box>
          </Stack>
        </Inline>
        {review.author_details.rating && (
          <Rating testId="movie-rating" rating={review.author_details.rating} />
        )}
      </Inline>
      <VerticalTextOverflow maxLines={2}>{review.content}</VerticalTextOverflow>
    </StyledMovieReviewCard>
  );
};

export default React.memo(MovieReviewCard);
