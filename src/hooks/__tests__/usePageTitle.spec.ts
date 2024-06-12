import { renderHook } from '@testing-library/react';
import usePageTitle from '../usePageTitle';

describe('usePageTitle', () => {
  it('should update the page title', () => {
    const newTitle = 'New Page Title';
    renderHook(() => usePageTitle(newTitle));

    expect(document.title).toBe(`Movie App - ${newTitle}`);
  });
  it('should render default page title', () => {
    renderHook(() => usePageTitle(''));

    expect(document.title).toBe(`Movie App`);
  });
});
