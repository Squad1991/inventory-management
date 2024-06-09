import { css, styled } from '@compiled/react';
import React from 'react';
import { FaBell, FaCameraRetro, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IconContainer from '~src/components/common/primitive/IconContainer';
import Inline from '~src/components/common/primitive/Inline';
import MovieSearch from '~src/components/movie-search/MovieSearch';

const HeaderWrapper = styled.header({
  display: 'flex',
  paddingBlock: '0.2rem',
  alignItems: 'center',
  paddingInline: '1rem',
  position: 'sticky',
  top: 0,
  height: 'var(--header-height)',
  zIndex: 'var(--z-index-header)',
  backgroundColor: 'var(--color-background-default)',
  borderBottom: '1px solid var(--color-border)',
  justifyContent: 'space-between',
});

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <IconContainer css={css({ fontSize: '1.5rem' })}>
        <FaCameraRetro />
        <Link to={'/'}>Movie Database</Link>
      </IconContainer>
      <Inline css={css({ width: '28rem' })}>
        <MovieSearch />
      </Inline>
      <IconContainer>
        <FaBell />
        <FaUser />
      </IconContainer>
    </HeaderWrapper>
  );
};

export default Header;
