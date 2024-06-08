import React from 'react';
import { RouterProvider } from 'react-router-dom';
import appRouter from '~src/app.router';
import LoadingSpinner from '~src/components/common/loading-spinner/LoadingSpinner';

export function App() {
  return (
    <React.StrictMode>
      <RouterProvider fallbackElement={<LoadingSpinner />} router={appRouter} />
    </React.StrictMode>
  );
}
