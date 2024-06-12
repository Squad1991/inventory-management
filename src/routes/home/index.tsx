import { css } from '@compiled/react';
import React, { Suspense } from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import Stack from '~src/components/common/primitive/Stack';
import MovieList from '~src/components/movie-list/MovieList';
import usePageTitle from '~src/hooks/usePageTitle';
import HomePageDataLoader from '~src/routes/home/Loader';
import HomePageSkelton from '~src/routes/home/Skeleton';
import { Movie } from '~src/routes/home/types';

/**
 * Renders home page with list of popular movies.
 */

const HomePage: React.FC = () => {
  usePageTitle('Home');
  const { data } = useLoaderData() as Awaited<ReturnType<typeof HomePageDataLoader>>;
  const navigate = useNavigate();

  const goToMovieInfoPage = (movie: Movie) => {
    navigate(`/movie/${movie.id}`, { preventScrollReset: false });
  };

  return (
    <Suspense fallback={<HomePageSkelton />}>
      <Stack css={css({ gap: '0.5rem' })}>
        <h4>Popular Movies</h4>
        <Await resolve={data}>
          {movies =>
            movies?.results?.length ? (
              <MovieList onMovieClick={goToMovieInfoPage} movies={movies.results} />
            ) : (
              <EmptyCard
                testId="no-movies"
                message={'No movies found. Please user search to find movies'}
              />
            )
          }
        </Await>
      </Stack>
    </Suspense>
  );
};

export default HomePage;
