import { css } from '@compiled/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Stack from '~src/components/common/primitive/Stack';
import MovieList from '~src/components/movie-list/MovieList';
import HomePageDataLoader from '~src/routes/home/Loader';

const HomePage: React.FC = () => {
  const { results } = useLoaderData() as Awaited<ReturnType<typeof HomePageDataLoader>>;
  return (
    <Stack css={css({ gap: '0.5rem' })}>
      <h2>Popular Movies</h2>
      <MovieList movies={results} />
    </Stack>
  );
};

export default HomePage;
