import { render } from '@testing-library/react';
import React from 'react';
import Skeleton from '~src/routes/home/Skeleton';

describe('Skeleton', () => {
  it('should render correctly', () => {
    const { container } = render(<Skeleton />);
    expect(container).toMatchSnapshot();
  });
});
