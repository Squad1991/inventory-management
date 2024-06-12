import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import selectEvent from 'react-select-event';
import { vi } from 'vitest';
import MovieSearch from '../MovieSearch';

describe('MovieSearch', () => {
  it('should render the component', () => {
    render(
      <MemoryRouter>
        <MovieSearch />
      </MemoryRouter>,
    );
    const movieSearchElement = screen.getByRole('combobox');
    expect(movieSearchElement).toBeInTheDocument();
  });
  it('should open menu and show message when no text is provided', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MovieSearch />
      </MemoryRouter>,
    );
    const input = screen.getByRole('combobox');
    selectEvent.openMenu(input);
    vi.spyOn(window, 'fetch').mockReturnValue(
      Promise.resolve(
        new Response('{"data": [{title: 1, value: 1}, {title: 2, value: 2}]}', {
          status: 200,
        }),
      ),
    );
    expect(
      screen.getByText('Please enter at least 3 characters to search for a movie'),
    ).toBeInTheDocument();
  });
});
