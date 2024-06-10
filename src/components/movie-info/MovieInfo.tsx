import { css } from '@compiled/react';
import React from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa';
import Rating from '~src/components/common/movie-rating/MovieRating';
import Box from '~src/components/common/primitive/Box';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import IconContainer from '~src/components/common/primitive/IconContainer';
import Inline from '~src/components/common/primitive/Inline';
import Stack from '~src/components/common/primitive/Stack';
import { convertTimeInHoursAndMinutes, formatDate } from '~src/components/common/utils/date-utils';
import MovieGenres from '~src/components/genres/MovieGenres';
import MoviePoster from '~src/components/movie-poster/MoviePoster';
import { MovieDatails } from '~src/routes/movie/types';

interface MovieInfoProps {
  movie: MovieDatails;
}

const MovieInfo: React.FC<MovieInfoProps> = props => {
  const {
    movie: { original_title, backdrop_path, genres, vote_average, release_date, runtime, overview },
  } = props;

  return (
    <Stack css={css({ gap: '1rem', position: 'relative' })}>
      <MoviePoster
        alt={original_title}
        height={400}
        fallback={
          <Box css={css({ background: '#161515', color: '#fff' })}>
            <EmptyCard height="24rem" message={'No Image Found'} />
          </Box>
        }
        css={css({ objectFit: 'contain', objectPosition: 'center', background: '#161515' })}
        src={backdrop_path}
      />
      <Stack css={css({ gap: '0.5rem' })}>
        <Stack css={css({ gap: '0.2rem' })}>
          <h2>{original_title}</h2>
          <Inline
            css={css({ gap: '1rem', alignItems: 'center', color: '#605b5d', fontSize: '1.1rem' })}
          >
            <MovieGenres genres={genres} />
            <Rating rating={vote_average || 0} />
            {release_date && (
              <IconContainer>
                <FaCalendar />
                <Box>{formatDate(new Date(release_date))}</Box>
              </IconContainer>
            )}
            <IconContainer>
              <FaClock />
              <Box>{convertTimeInHoursAndMinutes(runtime)}</Box>
            </IconContainer>
          </Inline>
        </Stack>
        <Box>{overview}</Box>
      </Stack>
    </Stack>
  );
};

export default MovieInfo;
