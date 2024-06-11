import { render } from '@testing-library/react';
import React from 'react';
import Stack from '../Stack';

describe('Stack component', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Stack>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>,
    );
    expect(container).toMatchSnapshot();
  });
});
