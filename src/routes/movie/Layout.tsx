import { css } from '@compiled/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import PageLayout from '~src/components/common/page-layout/PageLayout';
import Content from '~src/components/common/page-layout/content/Content';
import Header from '~src/components/common/page-layout/header/Header';
import Main from '~src/components/common/page-layout/main/Main';

const MovieInfoPageLayout: React.FC = () => {
  return (
    <PageLayout>
      <Header />
      <Content css={css({ marginInline: '5rem', marginBlock: '1rem' })}>
        <Main>
          <Outlet />
        </Main>
      </Content>
    </PageLayout>
  );
};

export default MovieInfoPageLayout;
