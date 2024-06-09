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
  width: '16rem',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  overflowY: 'auto',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e0e0e0',
});

const MovieStatsStyles = css({
  gap: '.5rem',
  alignItems: 'center',
  paddingBlock: '0.5rem',
  paddingInline: '1rem',
  background: '#161515',
  color: 'white',
  borderTop: '1px solid #4a4646',
});

const MovieCard: React.FC<MovieCardProps> = props => {
  const {
    movie: { title, vote_count, popularity, vote_average, poster_path, release_date, id },
  } = props;
  const navigate = useNavigate();
  const goToMovieInfoPage = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <MovieCardContainer onClick={goToMovieInfoPage}>
      <Box
        css={css({
          height: '200px',
          overflow: 'hidden',
        })}
      >
        <MoviePoster imageUrl={poster_path} title="" />
      </Box>
      <Inline css={MovieStatsStyles}>
        <Rating rating={vote_average} />
        <Votes votes={vote_count} />
      </Inline>
      <Stack css={css({ gap: '.5rem', padding: '1rem' })}>
        <h2>
          <TextOverflow text={title} />
        </h2>
        <Box>{formatDate(new Date(release_date))}</Box>
      </Stack>
    </MovieCardContainer>
  );
};

export default MovieCard;
