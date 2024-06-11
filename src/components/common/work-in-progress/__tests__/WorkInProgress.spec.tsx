import { render } from '@testing-library/react';
import React from 'react';
import WorkInProgress from '../WorkInProgress';

describe('WorkInProgress component', () => {
  it('renders without crashing', () => {
    const { container } = render(<WorkInProgress />);
    expect(container).not.toBeEmpty();
  });
});
