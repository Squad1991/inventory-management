import { render } from '@testing-library/react';
import React from 'react';
import Section from '~src/components/common/primitive/Section';

describe('Section', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Section heading="My header">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Section>,
    );
    expect(container).toMatchSnapshot();
  });
});
