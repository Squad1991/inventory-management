import { render, screen } from '@testing-library/react';
import React from 'react';
import TrendingMovies from '~src/routes/home/TrendingMovies';

describe('Trending Movies', () => {
  it('renders without crashing', () => {
    render(<TrendingMovies />);
    expect(screen.getByTestId('no-trending-movies')).toBeDefined();
  });
});
