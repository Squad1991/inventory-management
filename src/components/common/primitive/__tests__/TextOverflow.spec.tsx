import { render } from '@testing-library/react';
import React from 'react';
import TextOverflow from '~src/components/common/primitive/TextOverflow';

describe('TextOverflow', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <div style={{ width: '1px' }}>
        <TextOverflow text="Lorem ipsum dolor sit ametLorem ipsum dolor sit amet" />
      </div>,
    );
    expect(container).toMatchSnapshot();
  });
});
