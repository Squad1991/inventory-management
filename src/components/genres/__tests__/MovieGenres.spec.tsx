import { render } from '@testing-library/react';
import React from 'react';
import MovieGenres from '~src/components/genres/MovieGenres';

describe('MovieGenres', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <MovieGenres
        genres={[
          {
            id: 1,
            name: 'Action',
          },
          {
            id: 2,
            name: 'Comedy',
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
