import { css } from '@compiled/react';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import Rating from '~src/components/common/movie-rating/MovieRating';
import Box from '~src/components/common/primitive/Box';
import IconContainer from '~src/components/common/primitive/IconContainer';
import Inline from '~src/components/common/primitive/Inline';
import Section from '~src/components/common/primitive/Section';
import Stack from '~src/components/common/primitive/Stack';
import { convertTimeInHoursAndMinutes, formatDate } from '~src/components/common/utils/date-utils';
import MovieReviews from '~src/components/movie-reviews/MovieReviews';
import SimilarMovies from '~src/components/similar-movies/SimilarMovies';
import MovieInfoLoader from '~src/routes/movie/Loader';

const MovieInfoPage: React.FC = () => {
  const movieInfo = useLoaderData() as Awaited<ReturnType<typeof MovieInfoLoader>>;

  return (
    <Stack css={css({ gap: '1rem' })}>
      <img
        width={'100%'}
        alt=""
        height={400}
        css={css({ objectFit: 'contain', objectPosition: 'center', background: '#161515' })}
        src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}
      />
      <Stack css={css({ gap: '2rem', paddingInline: '1.5rem' })}>
        <Stack css={css({ gap: '0.5rem' })}>
          <Stack css={css({ gap: '0.2rem' })}>
            <h2>{movieInfo.original_title}</h2>
            <Inline
              css={css({ gap: '1rem', alignItems: 'center', color: '#605b5d', fontSize: '1.1rem' })}
            >
              <Box>
                {movieInfo.genres
                  .map(genre => {
                    return genre.name;
                  })
                  .join('/')}
              </Box>
              <Rating rating={movieInfo.vote_average || 0} />
              {movieInfo.release_date && (
                <IconContainer>
                  <FaCalendar />
                  <Box>{formatDate(new Date(movieInfo.release_date))}</Box>
                </IconContainer>
              )}
              <IconContainer>
                <FaClock />
                <Box>{convertTimeInHoursAndMinutes(movieInfo.runtime)}</Box>
              </IconContainer>
            </Inline>
          </Stack>
          <Box css={css({ lineHeight: 'var(--line-height)' })}>{movieInfo.overview}</Box>
        </Stack>
        <Section heading="Top Reviews">
          <MovieReviews movieId={movieInfo.id} />
        </Section>
        <Section heading="You might also like">
          <SimilarMovies movieId={movieInfo.id} />
        </Section>
      </Stack>
    </Stack>
  );
};

export default MovieInfoPage;
