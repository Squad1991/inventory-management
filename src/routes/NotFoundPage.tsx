import React from 'react';
import NotFound from '~src/components/common/not-found/NotFound';
import Center from '~src/components/common/primitive/Center';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import Stack from '~src/components/common/primitive/Stack';
import usePageTitle from '~src/hooks/usePageTitle';

const NotFoundPage: React.FC = () => {
  usePageTitle('Page or a resource your are looking for is not available');
  return (
    <EmptyCard
      testId="not-found-page"
      message={
        <Stack>
          <NotFound width={'48rem'} height={'100%'} />
          <Center>
            <h2>Page or a resource does not exist</h2>
          </Center>
        </Stack>
      }
    />
  );
};

export default NotFoundPage;
