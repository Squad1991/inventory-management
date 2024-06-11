import { useEffect } from 'react';

const BaseTitle = 'Movie App';

/**
 * Hook to update the page title. It appends the title to the base title.
 */

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title ? `${BaseTitle} - ${title}` : BaseTitle}`;
  }, [title]);
};

export default usePageTitle;
