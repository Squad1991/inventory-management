import { render } from '@testing-library/react';
import React from 'react';
import EmptyCard from '../EmptyCard';

describe('EmptyCard', () => {
  it('renders correctly with text msg', () => {
    const tree = render(<EmptyCard message={'empty card'} />);
    expect(tree).toMatchSnapshot();
  });
});
