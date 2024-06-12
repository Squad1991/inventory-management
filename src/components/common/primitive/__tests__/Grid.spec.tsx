import { render } from '@testing-library/react';
import React from 'react';
import Grid from '../Grid';

describe('Grid component', () => {
  it('renders without crashing', () => {
    render(<Grid />);
  });
});
