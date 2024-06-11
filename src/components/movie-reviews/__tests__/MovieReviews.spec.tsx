import { render, screen } from '@testing-library/react';
import React from 'react';
import MovieReviews from '~src/components/movie-reviews/MovieReviews';

describe('MovieReviews', () => {
  it('renders without crashing', () => {
    render(<MovieReviews reviews={[]} />);
    expect(screen.getByTestId('no-movies-msg')).toBeInTheDocument();
  });
  it('renders all review', () => {
    const reviews = [
      {
        author: 'John Doe',
        author_details: {
          name: 'John Doe',
          username: 'johndoe',
          avatar_path: 'dummy.jpg',
          rating: 5,
        },
        content: 'Dummy content',
        created_at: '2021-01-01',
        id: '1',
        updated_at: '2021-01-11',
        url: 'https://www.themoviedb.org/review/1',
      },
      {
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
      },
    ];
    render(<MovieReviews reviews={reviews} />);
    reviews.forEach(({ id }) => {
      expect(screen.getByTestId(`review-${id}`)).toBeInTheDocument();
    });
  });
});
