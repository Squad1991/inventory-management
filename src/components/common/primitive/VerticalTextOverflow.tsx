import { styled } from '@compiled/react';
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
  return <VerticalTextOverflowWrapper maxLines={maxLines}>{children}</VerticalTextOverflowWrapper>;
};

export default VerticalTextOverflow;
