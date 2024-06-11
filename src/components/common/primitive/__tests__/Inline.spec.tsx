import { render } from '@testing-library/react';
import React from 'react';
import Inline from '~src/components/common/primitive/Inline';

describe('Inline component', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Inline>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Inline>,
    );
    expect(container).toMatchSnapshot();
  });
});
