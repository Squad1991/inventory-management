import { css } from '@compiled/react';
import React from 'react';
import Stack from '~src/components/common/primitive/Stack';

interface EmptyCardProps {
  message: React.ReactNode;
  width?: string;
  height?: string;
}

const EmptyCardStyles = css({
  justifyContent: 'center',
  flex: '1',
  alignItems: 'center',
});

const EmptyCard: React.FC<EmptyCardProps> = ({ message, height, width }) => {
  return <Stack css={[EmptyCardStyles, css({ height, width })]}>{message}</Stack>;
};

export default EmptyCard;
