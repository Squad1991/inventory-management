import { render, screen } from '@testing-library/react';
import React from 'react';
import MovieRating from '../MovieRating';

describe('MovieRating', () => {
  it('renders the movie rating correctly', () => {
    render(<MovieRating rating={10} />);
    expect(screen.getByText('10 / 10')).toBeInTheDocument();
  });
});
