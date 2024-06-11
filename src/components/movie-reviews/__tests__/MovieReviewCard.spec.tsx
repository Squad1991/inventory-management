import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import MovieReviewCard from '../MovieReviewCard';

describe('MovieReviewCard', () => {
  it('renders the movie review card correctly', () => {
    const { container } = render(
      <MovieReviewCard
        review={{
          author: 'John cena',
          author_details: {
            name: 'John Cena',
            username: 'johncena',
            avatar_path: 'dummy1.jpg',
            rating: 5,
          },
          content: 'Dummy content',
          created_at: '2022-01-01',
          id: '2',
          updated_at: '2022-01-11',
          url: 'https://www.themoviedb.org/review/2',
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('should open review in new window', () => {
    vi.spyOn(window, 'open');
    const { container } = render(
      <MovieReviewCard
        testId="movie-review-card"
        review={{
          author: 'John cena',
          author_details: {
            name: 'John Cena',
            username: 'johncena',
            avatar_path: 'dummy1.jpg',
            rating: 5,
          },
          content: 'Dummy content',
          created_at: '2022-01-01',
          id: '2',
          updated_at: '2022-01-11',
          url: 'https://www.themoviedb.org/review/2',
        }}
      />,
    );
    fireEvent.click(screen.getByTestId('movie-review-card'));
    expect(window.open).toHaveBeenCalledWith('https://www.themoviedb.org/review/2', '_blank');
  });
});
