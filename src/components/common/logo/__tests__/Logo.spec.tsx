import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Logo from '~src/components/common/logo/Logo';

describe('Logo', () => {
  it('should pass', async () => {
    const { container } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
