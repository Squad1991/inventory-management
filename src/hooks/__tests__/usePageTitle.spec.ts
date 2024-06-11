import { renderHook } from '@testing-library/react';
import usePageTitle from '../usePageTitle';

describe('usePageTitle', () => {
  it('should update the page title', () => {
    const newTitle = 'New Page Title';
    const { result } = renderHook(() => usePageTitle(newTitle));

    expect(document.title).toBe(`Movie App - ${newTitle}`);
  });
});
