import { render } from '@testing-library/react';
import React from 'react';
import { App } from '~src/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
