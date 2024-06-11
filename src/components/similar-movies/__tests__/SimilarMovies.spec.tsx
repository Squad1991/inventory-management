import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import SimilarMovies from '../SimilarMovies';

describe('SimilarMovies', () => {
  it('renders empty when no similar movies', () => {
    render(<SimilarMovies movies={[]} />);
    expect(screen.getByTestId('no-similar-movies')).toBeInTheDocument();
  });
  it('renders movies', () => {
    render(
      <RouterProvider
        router={createMemoryRouter([
          {
            index: true,
            Component: () => (
              <SimilarMovies
                movies={[
                  {
                    id: 1,
                    title: 'Dummy title',
                    poster_path: 'dummy.jpg',
                    release_date: '2021-01-01',
                    vote_average: 5,
                    vote_count: 100,
                    adult: false,
                    backdrop_path: 'dummy.jpg',
                    genre_ids: [1, 2],
                    original_language: 'en',
                    original_title: 'Dummy title',
                    overview: 'Dummy overview',
                    popularity: 100,
                    video: false,
                  },
                ]}
              />
            ),
          },
          {
            Component: () => <div>Movie 1</div>,
            path: '/movie/1',
          },
        ])}
       />,
    );
    fireEvent.click(screen.getByTestId('movie-1'));
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
  });
});
