import { css, styled } from '@compiled/react';
import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import Logo from '~src/components/common/logo/Logo';
import IconContainer from '~src/components/common/primitive/IconContainer';
import Inline from '~src/components/common/primitive/Inline';
import MovieSearch from '~src/components/movie-search/MovieSearch';

const HeaderWrapper = styled.header({
  display: 'flex',
  paddingBlock: '1.5rem',
  paddingInline: '12rem',
  alignItems: 'center',
  height: 'var(--header-height)',
  zIndex: 'var(--z-index-header)',
  backgroundColor: '#fff',
  justifyContent: 'space-between',
});

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Inline css={css({ width: '28rem' })}>
        <MovieSearch />
      </Inline>
      <IconContainer>
        <FaBell data-testid="bell-icon" size={16} />
        <FaUser data-testid="user-icon" size={16} />
      </IconContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
