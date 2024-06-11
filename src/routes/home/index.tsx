import { css } from '@compiled/react';
import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Stack from '~src/components/common/primitive/Stack';
import MovieList from '~src/components/movie-list/MovieList';
import usePageTitle from '~src/hooks/usePageTitle';
import HomePageDataLoader from '~src/routes/home/Loader';
import HomePageSkelton from '~src/routes/home/Skeleton';

const HomePage: React.FC = () => {
  usePageTitle('Home');
  const { data } = useLoaderData() as Awaited<ReturnType<typeof HomePageDataLoader>>;

  return (
    <Suspense fallback={<HomePageSkelton />}>
      <Stack css={css({ gap: '0.5rem' })}>
        <h4>Popular Movies</h4>
        <Await resolve={data}>{movies => <MovieList movies={movies.results} />}</Await>
      </Stack>
    </Suspense>
  );
};

export default HomePage;
