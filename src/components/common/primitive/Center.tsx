import { css } from '@compiled/react';
import React, { PropsWithChildren } from 'react';
import Box from '~src/components/common/primitive/Box';

const CenterStyles = css({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const Center: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box css={CenterStyles}>{children}</Box>;
};

export default Center;
