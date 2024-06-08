import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Box from '~src/components/common/primitive/Box';

const RootErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Box>This page doesn't exist!</Box>;
    }

    if (error.status === 401) {
      return <Box>You aren't authorized to see this</Box>;
    }

    if (error.status === 503) {
      return <Box>Looks like our API is down</Box>;
    }

    if (error.status === 418) {
      return <Box>🫖</Box>;
    }
  }

  return <Box>Something went wrong</Box>;
};

export default RootErrorBoundary;
