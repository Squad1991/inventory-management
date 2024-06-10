import { css } from '@compiled/react';
import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Section from '~src/components/common/primitive/Section';
import Stack from '~src/components/common/primitive/Stack';
import MovieInfo from '~src/components/movie-info/MovieInfo';
import MovieReviews from '~src/components/movie-reviews/MovieReviews';
import SimilarMovies from '~src/components/similar-movies/SimilarMovies';
import { MovieInfoLoaderData } from '~src/routes/movie/Loader';
import MovieInfoPageSkelton from '~src/routes/movie/Skeleton';

const MovieInfoPage: React.FC = () => {
  const { reviews, movieInfo, similarMovies } = useLoaderData() as MovieInfoLoaderData;

  return (
    <Stack css={css({ gap: '2rem', position: 'relative' })}>
      <Suspense fallback={<MovieInfoPageSkelton />}>
        <Await resolve={movieInfo}>{movieInfo => <MovieInfo movie={movieInfo} />}</Await>
        <Await resolve={reviews}>
          {reviews => (
            <Section heading="Top Reviews">
              <MovieReviews reviews={reviews.results} />
            </Section>
          )}
        </Await>
        <Section heading="You might also like">
          <Await resolve={similarMovies}>
            {similarMovies => <SimilarMovies movies={similarMovies.results} />}
          </Await>
        </Section>
      </Suspense>
    </Stack>
  );
};

export default MovieInfoPage;
