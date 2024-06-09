import { css } from '@compiled/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import PageLayout from '~src/components/common/page-layout/PageLayout';
import Content from '~src/components/common/page-layout/content/Content';
import Header from '~src/components/common/page-layout/header/Header';
import Main from '~src/components/common/page-layout/main/Main';
import Sidebar from '~src/components/common/page-layout/sidebar/Sidebar';

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <Header />
      <Content css={css({ gridTemplateColumns: '200px 1fr' })}>
        <Sidebar />
        <Main css={css({ paddingInline: '2rem', paddingBlock: '1rem' })}>
          <Outlet />
        </Main>
      </Content>
    </PageLayout>
  );
};

export default HomePage;
