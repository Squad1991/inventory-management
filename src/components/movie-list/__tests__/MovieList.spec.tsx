import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { Movie } from '~src/routes/home/types';
import MovieList from '../MovieList';

describe('MovieList', () => {
  it('renders the movie list component', () => {
    const onMovieClick = vi.fn();
    const movies: Movie[] = [
      {
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
      },
      {
        adult: false,
        backdrop_path: '/path',
        genre_ids: [1, 2],
        id: 2,
        original_language: 'en',
        original_title: 'Original Title',
        overview: 'Overview',
        popularity: 1,
        poster_path: '/path',
        release_date: '2021-01-01',
        title: 'Movie Title 1',
        video: false,
        vote_average: 1,
        vote_count: 1,
      },
    ];
    render(
      <MemoryRouter>
        <MovieList onMovieClick={onMovieClick} movies={movies} />
      </MemoryRouter>,
    );

    ['movie-1', 'movie-2'].forEach(movie => expect(screen.getByTestId(movie)).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('movie-1'));
    expect(onMovieClick).toHaveBeenCalledWith(movies[0]);
  });
});
