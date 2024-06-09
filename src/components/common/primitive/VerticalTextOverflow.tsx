import { styled } from '@compiled/react';
import Tooltip from 'rc-tooltip';
import React from 'react';

interface VerticalTextOverflowProps extends React.PropsWithChildren {
  maxLines: number;
}

const VerticalTextOverflowWrapper = styled.div<VerticalTextOverflowProps>({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': props => props.maxLines,
  '-webkit-box-orient': 'vertical',
});

const VerticalTextOverflow: React.FC<VerticalTextOverflowProps> = ({ children, maxLines }) => {
  return (
    <Tooltip mouseEnterDelay={0.5} placement="top" trigger={['hover']} overlay={children}>
      <VerticalTextOverflowWrapper maxLines={maxLines}>{children}</VerticalTextOverflowWrapper>
    </Tooltip>
  );
};

export default VerticalTextOverflow;
