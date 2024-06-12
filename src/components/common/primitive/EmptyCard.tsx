import { css } from '@compiled/react';
import React from 'react';
import Card from '~src/components/common/primitive/Card';
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
  padding: '4rem',
  alignItems: 'center',
});

const EmptyCard: React.FC<EmptyCardProps> = ({ message, height, width, testId }) => {
  return (
    <Card css={css({ height, width, flex: 1 })}>
      <Stack data-testid={testId} css={EmptyCardStyles}>
        {message}
      </Stack>
    </Card>
  );
};

export default React.memo(EmptyCard);
