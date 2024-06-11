import { render } from '@testing-library/react';
import React from 'react';
import Center from '../Center';

describe('Center component', () => {
  it('should render correctly', () => {
    const { container } = render(<Center>Hello, World!</Center>);
    expect(container).toMatchSnapshot();
  });
});
