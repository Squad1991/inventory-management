import { render } from '@testing-library/react';
import React from 'react';
import Card from '~src/components/common/primitive/Card';

describe('Card component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Card>Hello</Card>);
    expect(container).toMatchSnapshot();
  });
});
