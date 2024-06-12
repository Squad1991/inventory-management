import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import SomethingWentWrong from '~src/components/common/generic-error/GenericError';
import NotFoundPage from '~src/routes/NotFoundPage';

/**
 * Renders an error message based on the error status.
 * Renders generic error message if its not an route error.
 */

const RootErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFoundPage />;
    }
    /** Uncomment based on requirements */
    // if (error.status === 401) {
    //   return <Center>You aren't authorized to see this</Center>;
    // }

    // if (error.status === 503) {
    //   return <Center>Looks like our API is down</Center>;
    // }

    // if (error.status === 418) {
    //   return <Center>🫖</Center>;
    // }
  }

  return <SomethingWentWrong />;
};

export default React.memo(RootErrorBoundary);
