import { css } from '@compiled/react';
import React from 'react';
import Stack from '~src/components/common/primitive/Stack';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';

interface EmptyCardProps extends ComponentPropsWithTestId {
  message: React.ReactNode;
  width?: string;
  height?: string;
}

const EmptyCardStyles = css({
  justifyContent: 'center',
  flex: '1',
  alignItems: 'center',
});

const EmptyCard: React.FC<EmptyCardProps> = ({ message, height, width, testId }) => {
  return (
    <Stack data-testid={testId} css={[EmptyCardStyles, css({ height, width })]}>
      {message}
    </Stack>
  );
};

export default EmptyCard;
