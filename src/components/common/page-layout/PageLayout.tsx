import { styled } from '@compiled/react';
import React from 'react';
import Footer from '~src/components/common/page-layout/footer/Footer';
import Header from '~src/components/common/page-layout/header/Header';
import Sidebar from '~src/components/common/page-layout/sidebar/Sidebar';

const PageLayoutWrapper = styled.div({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  flexDirection: 'column',
  backgroundColor: 'var(--color-background)',
  height: '100%',
});

const Content = styled.div({
  overflowY: 'auto',
  display: 'grid',
  gridTemplateColumns: '180px 2fr',
  backgroundColor: 'white',
});

const Main = styled.main({
  height: '100%',
  overflowY: 'auto',
  padding: '0.5rem',
});

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <PageLayoutWrapper>
      <Header />
      <Content>
        <Sidebar />
        <Main>{children}</Main>
      </Content>
      <Footer />
    </PageLayoutWrapper>
  );
};
