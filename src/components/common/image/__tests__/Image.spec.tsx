import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Image from '../Image';

describe('Image', () => {
  it('renders without errors', () => {
    render(<Image src="path/to/image.jpg" alt="Test Image" fallback={'empty'} />);
    const img = screen.getByAltText('Test Image');
    expect(img.getAttribute('src')).toBe('path/to/image.jpg');
  });
  it('renders fallback', () => {
    render(<Image src="path/to/image.jpg" alt="Test Image" fallback={'empty'} />);
    const img = screen.getByAltText('Test Image');
    fireEvent.error(img);
    expect(screen.getByText('empty')).toBeInTheDocument();
  });
});
