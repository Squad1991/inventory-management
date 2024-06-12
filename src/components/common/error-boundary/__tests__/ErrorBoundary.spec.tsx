import { render, screen } from '@testing-library/react';
import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ErrorBoundary from '~src/components/common/error-boundary/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders error', () => {
    render(
      <RouterProvider
        router={createMemoryRouter([
          {
            path: '/',
            errorElement: <ErrorBoundary />,
            index: true,
            Component: () => {
              throw new Error('Error');
            },
          },
        ])}
      ></RouterProvider>,
    );
    expect(screen.getByTestId('generic-error')).toBeInTheDocument();
  });
  it('renders error - not found', () => {
    render(
      <RouterProvider
        router={createMemoryRouter([
          {
            path: '/test',
            errorElement: <ErrorBoundary />,
            index: true,
            Component: () => {
              return 'hello';
            },
          },
        ])}
      ></RouterProvider>,
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
