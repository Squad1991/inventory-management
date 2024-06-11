import { render } from '@testing-library/react';
import React from 'react';
import Content from '../Content';

describe('Content', () => {
  it('renders without error', () => {
    const { container } = render(<Content />);
    expect(container).toBeDefined();
  });
});
