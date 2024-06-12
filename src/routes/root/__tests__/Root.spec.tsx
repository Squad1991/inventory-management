import { render } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from '~src/routes/root/Root';

describe('Root component', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            index: true,
            Component: Root,
          },
        ])}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
