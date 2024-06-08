import { styled } from '@compiled/react';
import React from 'react';
import { FaHome, FaRegThumbsUp } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import Box from '~src/components/common/primitive/Box';

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
          <Box>Home</Box>
        </SidebarListItem>
        <SidebarListItem>
          <FaArrowTrendUp />
          <Box>Trending</Box>
        </SidebarListItem>
        <SidebarListItem>
          <FaRegThumbsUp />
          <Box>Recommended</Box>
        </SidebarListItem>
      </SidebarSidebarList>
    </SidebarWrapper>
  );
};

export default Sidebar;
