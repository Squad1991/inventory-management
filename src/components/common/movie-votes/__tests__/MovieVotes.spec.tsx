import { render } from '@testing-library/react';
import React from 'react';
import MovieVotes from '../MovieVotes';

describe('MovieVotes', () => {
  it('renders the movie votes component', () => {
    const { container } = render(<MovieVotes votes={10000} />);

    expect(container).toHaveTextContent('10,000 Votes');
  });
});
