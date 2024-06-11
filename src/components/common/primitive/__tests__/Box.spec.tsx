import { render } from '@testing-library/react';
import React from 'react';
import Box from '~src/components/common/primitive/Box';

describe('Box component', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />);
    expect(container).toMatchSnapshot();
  });
});
