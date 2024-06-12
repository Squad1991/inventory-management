import { css, styled } from '@compiled/react';
import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import Logo from '~src/components/common/logo/Logo';
import IconContainer from '~src/components/common/primitive/IconContainer';
import Inline from '~src/components/common/primitive/Inline';
import MovieSearch from '~src/components/movie-search/MovieSearch';
import { Movie } from '~src/routes/home/types';

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

interface HeaderProps {
  onMovieSelect: (movie: Movie) => void;
}

/**
 * Render the header component with the logo, search bar and user icons.
 */

const Header: React.FC<HeaderProps> = ({ onMovieSelect }) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Inline css={css({ width: '28rem' })}>
        <MovieSearch onChange={onMovieSelect} />
      </Inline>
      <IconContainer>
        <FaBell data-testid="bell-icon" size={16} />
        <FaUser data-testid="user-icon" size={16} />
      </IconContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
