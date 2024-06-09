import { styled } from '@compiled/react';

interface VerticalTextOverflowProps {
  maxLines: number;
}

const VerticalTextOverflow = styled.div<VerticalTextOverflowProps>({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': props => props.maxLines,
  '-webkit-box-orient': 'vertical',
});

export default VerticalTextOverflow;
