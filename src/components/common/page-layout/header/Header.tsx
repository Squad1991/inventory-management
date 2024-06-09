import { css, styled } from '@compiled/react';
import React from 'react';
import { FaBell, FaCameraRetro, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
      <Inline css={css({ gap: '0.2rem' })}>
        <FaCameraRetro />
        <Link to={'/'}>Movie Database</Link>
      </Inline>
      <Inline css={css({ width: '28rem' })}>
        <MovieSearch />
      </Inline>
      <Inline css={css({ alignItems: 'center', gap: '.8rem' })}>
        <FaBell />
        <FaUser />
      </Inline>
    </HeaderWrapper>
  );
};

export default Header;
