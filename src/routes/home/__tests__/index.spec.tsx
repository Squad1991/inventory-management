import { render, waitFor } from '@testing-library/react';
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
    });
  });
});
