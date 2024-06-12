import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Header from '../Header';

describe('Header', () => {
  test('displays correct title', () => {
    render(
      <MemoryRouter>
        <Header onMovieSelect={vi.fn()} />
      </MemoryRouter>,
    );
    const titleElement = screen.getByText('Movie Database');
    expect(titleElement).toBeInTheDocument();
    expect(screen.getByTestId('bell-icon')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    expect(screen.getByText('Search movie by name...')).toBeInTheDocument();
  });
});
