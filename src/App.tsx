import React from 'react';
import { RouterProvider } from 'react-router-dom';
import appRouter from '~src/app.router';
import AppLoadingSpinner from '~src/components/common/loading-spinner/LoadingSpinner';

export function App() {
  return (
    <React.StrictMode>
      <RouterProvider fallbackElement={<AppLoadingSpinner />} router={appRouter} />
    </React.StrictMode>
  );
}
