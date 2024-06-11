import { render } from '@testing-library/react';
import React from 'react';
import Main from '~src/components/common/page-layout/main/Main';

describe('Main component', () => {
  it('renders without crashing', () => {
    render(<Main />);
  });
});
