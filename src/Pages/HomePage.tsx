import React from 'react';
import { PageLayout } from '~src/components/common/page-layout/PageLayout';
import Stack from '~src/components/common/primitive/Stack';

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <Stack>
        <h1>Upcoming releases</h1>
        <h1>New releases</h1>
      </Stack>
    </PageLayout>
  );
};

export default HomePage;
