import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
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
});
