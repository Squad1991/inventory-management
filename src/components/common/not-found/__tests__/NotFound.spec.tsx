import { render } from '@testing-library/react';
import React from 'react';
import NotFound from '../NotFound';

describe('NotFound component', () => {
  it('renders without crashing', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
