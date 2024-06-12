import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { RouterProvider, createMemoryRouter, defer } from 'react-router-dom';
import Index from '../index';

describe('Index Component', () => {
  it('renders without crashing', async () => {
    render(
      <RouterProvider
        router={createMemoryRouter(
          [
            {
              index: true,
              path: '/movies/1',
              errorElement: <div>Error</div>,
              loader: async () => {
                return defer({
                  movieInfo: Promise.resolve({}),
                  reviews: Promise.resolve({ results: [] }),
                  similarMovies: Promise.resolve({ results: [] }),
                });
              },
              Component: Index,
            },
            {
              path: '/',
              element: <div data-testid="home-page">Home</div>,
            },
          ],
          { initialEntries: ['/movies/1'] },
        )}
      />,
    );
    await waitFor(() => {
      expect(document.title).toBe('Movie App - Movie Details');
    });
    fireEvent.click(screen.getByTestId('home-page-breadcrumb'));
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });
});
