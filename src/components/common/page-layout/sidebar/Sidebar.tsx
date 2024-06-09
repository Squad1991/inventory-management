import { styled } from '@compiled/react';
import React from 'react';
import { FaHome, FaRegThumbsUp } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.aside({
  backgroundColor: 'none',
  height: '100%',
  paddingInSidebarListItemne: '1rem',
  overflowY: 'auto',
  paddingBlock: '1rem',
  borderRight: '1px solid var(--color-border)',
});

const SidebarSidebarList = styled.ul({
  SidebarListItemstStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.1rem',
  margin: 0,
});

const SidebarListItem = styled.li({
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
  paddingBlock: '0.5rem',
  paddingInline: '1rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'var(--color-background-SidebarListItemght)',
  },
});

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <SidebarSidebarList>
        <SidebarListItem>
          <FaHome />
          <Link to={'/'}>Home</Link>
        </SidebarListItem>
        <SidebarListItem>
          <FaArrowTrendUp />
          <Link to={'/movies/trending'}>Trending</Link>
        </SidebarListItem>
        <SidebarListItem>
          <FaRegThumbsUp />
          <Link to={'/movies/recommended'}>Recommended</Link>
        </SidebarListItem>
      </SidebarSidebarList>
    </SidebarWrapper>
  );
};

export default Sidebar;
