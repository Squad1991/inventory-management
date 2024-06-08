import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '~src/components/common/error-boundary/ErrorBoundary';

const appRouter = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { default: HomePage } = await import('~src/pages/HomePage');
      return { Component: HomePage };
    },
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    async lazy() {
      const { default: NotFoundPage } = await import('~src/pages/NotFoundPage');
      return { Component: NotFoundPage };
    },
  },
]);

export default appRouter;
