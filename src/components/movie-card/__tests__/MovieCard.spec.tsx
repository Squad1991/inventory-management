import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';
import MovieCard from '~src/components/movie-card/MovieCard';
import { Movie } from '~src/routes/home/types';

describe('MovieCard', () => {
  it('renders the movie title', () => {
    const movie: Movie = {
      adult: false,
      backdrop_path: '/path',
      genre_ids: [1, 2],
      id: 1,
      original_language: 'en',
      original_title: 'Original Title',
      overview: 'Overview',
      popularity: 1,
      poster_path: '/path',
      release_date: '2021-01-01',
      title: 'Movie Title',
      video: false,
      vote_average: 1,
      vote_count: 1,
    };

    const { getByTestId } = render(
      <MemoryRouter>
        <MovieCard movie={movie} />
      </MemoryRouter>,
    );
    const titleElement = getByTestId('movie-title');

    expect(titleElement).toHaveTextContent(movie.title);
  });
  it('should open movie details page', () => {
    const movie: Movie = {
      adult: false,
      backdrop_path: '/path',
      genre_ids: [1, 2],
      id: 1,
      original_language: 'en',
      original_title: 'Original Title',
      overview: 'Overview',
      popularity: 1,
      poster_path: '/path',
      title: 'Movie Title',
      video: false,
      vote_average: 1,
      vote_count: 1,
    };

    const { getByTestId, queryByTestId } = render(
      <RouterProvider
        router={createMemoryRouter([
          {
            path: '/',
            index: true,
            element: <MovieCard movie={movie} />,
          },
          {
            path: '/movie/:id',
            element: <div data-testid="movie-details">Movie</div>,
          },
        ])}
      />,
    );
    expect(queryByTestId('movie-details')).not.toBeInTheDocument();
    const titleElement = getByTestId('movie-title');
    fireEvent.click(titleElement);
    expect(getByTestId('movie-details')).toBeInTheDocument();
  });
});
