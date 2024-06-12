import { render } from '@testing-library/react';
import React from 'react';
import PageLayout from '../PageLayout';

describe('PageLayout', () => {
  it('renders without errors', () => {
    const { container } = render(<PageLayout />);
    expect(container).toBeDefined();
  });
});
