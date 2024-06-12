import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { RouterProvider, createMemoryRouter, defer } from 'react-router-dom';
import { vi } from 'vitest';
import Index from '../index';

describe('Index Component', () => {
  it('renders without crashing', async () => {
    render(
      <RouterProvider
        router={createMemoryRouter(
          [
            {
              path: '/',
              index: true,
              errorElement: <div>Error</div>,
              loader: async () => {
                return defer(
                  await Promise.resolve({
                    data: {
                      results: [],
                    },
                  }),
                );
              },
              Component: Index,
            },
          ],
          { initialEntries: ['/'] },
        )}
      />,
    );
    await waitFor(() => {
      expect(document.title).toBe('Movie App - Home');
      expect(screen.getByTestId('no-movies')).toBeInTheDocument();
    });
  });
  it('renders movies', async () => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    render(
      <RouterProvider
        router={createMemoryRouter(
          [
            {
              path: '/movie/:id',
              Component: () => <div data-testid="movie-info">Movie</div>,
            },
            {
              path: '/',
              index: true,
              errorElement: <div>Error</div>,
              loader: async () => {
                return defer(
                  await Promise.resolve({
                    data: {
                      results: [
                        {
                          adult: false,
                          backdrop_path: '/backdrop_path',
                          genre_ids: [1, 2],
                          id: 1,
                          original_language: 'en',
                          original_title: 'original_title',
                          overview: 'overview',
                          popularity: 1,
                          poster_path: '/poster_path',
                          release_date: '2021-01-01',
                          title: 'title',
                          video: false,
                          vote_average: 1,
                          vote_count: 1,
                        },
                      ],
                    },
                  }),
                );
              },
              Component: Index,
            },
          ],
          { initialEntries: ['/'] },
        )}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId('movie-1')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('movie-1'));
    expect(screen.getByTestId('movie-info')).toBeInTheDocument();
  });
});
