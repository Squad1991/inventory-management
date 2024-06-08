import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import appRouter from '~src/app.router';

export function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  );
}
