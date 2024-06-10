import { css, styled } from '@compiled/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '~src/components/common/movie-rating/MovieRating';
import Votes from '~src/components/common/movie-votes/MovieVotes';
import Box from '~src/components/common/primitive/Box';
import Inline from '~src/components/common/primitive/Inline';
import Stack from '~src/components/common/primitive/Stack';
import TextOverflow from '~src/components/common/primitive/TextOverflow';
import { formatDate } from '~src/components/common/utils/date-utils';
import MoviePoster from '~src/components/movie-poster/MoviePoster';
import { Movie } from '~src/routes/home/types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCardContainer = styled.li({
  display: 'flex',
  flexDirection: 'column',
  width: '18rem',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  overflowY: 'auto',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e0e0e0',
});

const MovieStatsStyles = css({
  gap: '.5rem',
  fontSize: '0.75rem',
  alignItems: 'center',
  paddingBlock: '0.5rem',
  paddingInline: '1rem',
  background: '#161515',
  color: 'white',
  borderTop: '1px solid #4a4646',
});

const MovieCard: React.FC<MovieCardProps> = props => {
  const {
    movie: { title, vote_count, vote_average, poster_path, release_date, id },
  } = props;
  const navigate = useNavigate();
  const goToMovieInfoPage = () => {
    navigate(`/movie/${id}`, { preventScrollReset: false });
  };
  return (
    <MovieCardContainer onClick={goToMovieInfoPage}>
      <Box
        css={css({
          height: '200px',
          overflow: 'hidden',
        })}
      >
        <MoviePoster width={250} height={200} src={poster_path} alt={title} />
      </Box>
      <Inline css={MovieStatsStyles}>
        <Rating rating={vote_average} />
        <Votes votes={vote_count} />
      </Inline>
      <Stack css={css({ padding: '1rem' })}>
        <h5>
          <TextOverflow text={title} />
        </h5>
        {release_date && (
          <Box css={css({ fontSize: '.7rem' })}>{formatDate(new Date(release_date))}</Box>
        )}
      </Stack>
    </MovieCardContainer>
  );
};

export default MovieCard;
