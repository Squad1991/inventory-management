import { styled } from '@compiled/react';
import React from 'react';
import { FaHome, FaRegThumbsUp } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { NavLink, useLocation } from 'react-router-dom';

const NavWrapper = styled.nav({
  backgroundColor: 'none',
  height: '100%',
  paddingInSidebarListItemne: '1rem',
  overflowY: 'auto',
  paddingBlock: '0.2rem',
  paddingInline: '11rem',
  borderBottom: '1px solid var(--color-border)',
});

const NavList = styled.ul({
  SidebarListItemstStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
});

const NavItem = styled.li({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingInline: '1rem',
  cursor: 'pointer',
});

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <FaHome />
          <NavLink
            className={({ isActive, isPending }) =>
              pathname === '/movies' && isActive ? 'active' : ''
            }
            to={'/movies'}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <FaArrowTrendUp />
          <NavLink to={'/movies/trending'}>Trending</NavLink>
        </NavItem>
        <NavItem>
          <FaRegThumbsUp />
          <NavLink to={'/movies/recommended'}>Recommended</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

export default React.memo(Navbar);
