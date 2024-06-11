import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { vi } from 'vitest';
import Breadcrumb from '~src/components/common/breadcrumb/breadcrumb';

describe('Breadcrumb', () => {
  it('should be accessibile', async () => {
    const onClickMock = vi.fn();
    const { container } = render(
      <Breadcrumb
        items={[
          {
            link: 'link',
            testId: 'home',
            text: 'Home',
            onClick: onClickMock,
          },
        ]}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it('renders without errors', () => {
    const onClickMock = vi.fn();
    render(
      <Breadcrumb
        items={[
          {
            link: 'link',
            testId: 'home',
            text: 'Home',
            onClick: onClickMock,
          },
        ]}
      />,
    );
    fireEvent.click(screen.getByTestId('home'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
