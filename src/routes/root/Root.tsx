import { css } from '@compiled/react';
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import PageLayout from '~src/components/common/page-layout/PageLayout';
import Footer from '~src/components/common/page-layout/footer/Footer';
import Header from '~src/components/common/page-layout/header/Header';
import Main from '~src/components/common/page-layout/main/Main';
import Navbar from '~src/components/common/page-layout/navbar/Navbar';
import Stack from '~src/components/common/primitive/Stack';

/**
 * This is a root component that wraps the entire application.
 * It contains the header, navbar, main content, and footer and slot for routes.
 */
const Root: React.FC = () => {
  return (
    <PageLayout>
      <Stack>
        <Header />
        <Navbar />
      </Stack>
      <Main css={css({ paddingInline: '12rem', paddingBlock: '1rem' })}>
        <ScrollRestoration />
        <Outlet />
      </Main>
      <Footer />
    </PageLayout>
  );
};

export default Root;
