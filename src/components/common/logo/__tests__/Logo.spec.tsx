import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import MovieGenres from '~src/components/genres/MovieGenres';

describe('Logo', () => {
  it('should pass', async () => {
    const { container } = render(
      <MovieGenres
        genres={[
          {
            id: 1,
            name: 'Action',
          },
        ]}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
