import { css } from '@compiled/react';
import React from 'react';
import { FiCommand } from 'react-icons/fi';
import Box from '~src/components/common/primitive/Box';

const SpinnerStyles = css({
  display: 'flex',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  color: 'var(--icon-color-default)',
  fontSize: '1.5rem',
  animation: 'loading-animation 2s infinite',
});

const LoadingSpinner: React.FC = () => {
  return (
    <Box css={SpinnerStyles}>
      <FiCommand />
    </Box>
  );
};

export default LoadingSpinner;
