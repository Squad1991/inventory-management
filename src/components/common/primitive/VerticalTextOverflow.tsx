import { styled } from '@compiled/react';
import React from 'react';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';

interface VerticalTextOverflowProps extends React.PropsWithChildren, ComponentPropsWithTestId {
  maxLines: number;
}

const VerticalTextOverflowWrapper = styled.div<VerticalTextOverflowProps>({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': props => props.maxLines,
  '-webkit-box-orient': 'vertical',
});

const VerticalTextOverflow: React.FC<VerticalTextOverflowProps> = ({
  children,
  maxLines,
  testId,
}) => {
  return (
    <VerticalTextOverflowWrapper data-testid={testId} maxLines={maxLines}>
      {children}
    </VerticalTextOverflowWrapper>
  );
};

export default React.memo(VerticalTextOverflow);
