import { createBrowserRouter } from 'react-router-dom';
import HomePage from '~src/pages/HomePage';
import NotFoundPage from '~src/pages/NotFoundPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

export default appRouter;
