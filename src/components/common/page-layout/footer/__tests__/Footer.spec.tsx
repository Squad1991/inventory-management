import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '~src/components/common/page-layout/footer/Footer';

describe('Footer', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(container).toBeDefined();
  });
});
