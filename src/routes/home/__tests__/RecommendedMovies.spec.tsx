import { render, screen } from '@testing-library/react';
import React from 'react';
import RecommendedMovies from '../RecommendedMovies';

describe('RecommendedMovies', () => {
  it('renders without crashing', () => {
    render(<RecommendedMovies />);
    expect(screen.getByTestId('no-recommended-movies')).toBeDefined();
  });
});
