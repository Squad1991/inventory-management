import { css } from '@compiled/react';
import React, { Suspense } from 'react';
import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';
import LoadingSpinner from '~src/components/common/loading-spinner/LoadingSpinner';
import Stack from '~src/components/common/primitive/Stack';
import MovieList from '~src/components/movie-list/MovieList';
import HomePageDataLoader from '~src/routes/home/Loader';
import { Movie } from '~src/routes/home/types';

const HomePage: React.FC = () => {
  const movies = useAsyncValue() as Awaited<Movie[]>;
  return (
    <Stack css={css({ gap: '0.5rem' })}>
      <h4>Popular Movies</h4>
      <MovieList movies={movies} />
    </Stack>
  );
};

export default () => {
  const { results } = useLoaderData() as Awaited<ReturnType<typeof HomePageDataLoader>>;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={results}>{<HomePage />}</Await>
    </Suspense>
  );
};
