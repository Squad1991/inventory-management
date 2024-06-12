import { render, screen, within } from '@testing-library/react';
import React from 'react';
import GenericError from '../GenericError';

describe('GenericError', () => {
  it('renders the error message', () => {
    render(<GenericError />);
    const errorMsgContainer = screen.getByTestId('generic-error');
    expect(within(errorMsgContainer).getByTestId('error-msg')).toHaveTextContent(
      'We are working to get things up',
    );
  });
});
