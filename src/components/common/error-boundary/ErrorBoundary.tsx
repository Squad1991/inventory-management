import React from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Box from '~src/components/common/primitive/Box';
import Center from '~src/components/common/primitive/Center';
import Stack from '~src/components/common/primitive/Stack';

const RootErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <Center>
          <Stack>
            This page or a resource doesn't exist!
            <Link to="/">Go back to home</Link>
          </Stack>
        </Center>
      );
    }

    if (error.status === 401) {
      return <Center>You aren't authorized to see this</Center>;
    }

    if (error.status === 503) {
      return <Center>Looks like our API is down</Center>;
    }

    if (error.status === 418) {
      return <Center>🫖</Center>;
    }
  }

  return <Box>Something went wrong</Box>;
};

export default RootErrorBoundary;
