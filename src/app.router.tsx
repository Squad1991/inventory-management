import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '~src/components/common/error-boundary/ErrorBoundary';
import HomePageDataLoader from '~src/routes/home/Loader';
import MovieInfoLoader from '~src/routes/movie/Loader';

const appRouter = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { default: RootLayout } = await import('~src/routes/home/Layout');
      return { Component: RootLayout };
    },
    errorElement: <ErrorBoundary />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        index: true,
        element: <Navigate to="movies" />,
      },
      {
        path: 'movies',
        loader: HomePageDataLoader,
        async lazy() {
          const { default: HomePage } = await import('~src/routes/home');
          return { Component: HomePage };
        },
      },
      {
        path: 'movies/recommended',
        caseSensitive: true,
        async lazy() {
          const { default: RecommendedMovies } = await import('~src/routes/home/RecommendedMovies');
          return { Component: RecommendedMovies };
        },
      },
      {
        path: 'movies/trending',
        caseSensitive: true,
        async lazy() {
          const { default: TrendingMovies } = await import('~src/routes/home/TrendingMovies');
          return { Component: TrendingMovies };
        },
      },
    ],
  },
  {
    path: 'movie/:id',
    errorElement: <ErrorBoundary />,
    async lazy() {
      const { default: MovieInfoPageLayout } = await import('~src/routes/movie/Layout');
      return { Component: MovieInfoPageLayout };
    },
    children: [
      {
        index: true,
        loader: MovieInfoLoader,
        async lazy() {
          const { default: MovieInfoPage } = await import('~src/routes/movie/index');
          return { Component: MovieInfoPage };
        },
      },
    ],
  },
  {
    path: '*',
    async lazy() {
      const { default: NotFoundPage } = await import('~src/routes/NotFoundPage');
      return { Component: NotFoundPage };
    },
  },
]);

export default appRouter;
