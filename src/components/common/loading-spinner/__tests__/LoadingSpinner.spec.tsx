import { render } from '@testing-library/react';
import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container).toBeDefined();
  });
});
