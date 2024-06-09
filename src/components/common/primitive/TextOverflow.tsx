import Tooltip from 'rc-tooltip';
import React from 'react';

interface TextOverflowProps {
  text: string;
}

const TextOverflow: React.FC<TextOverflowProps> = ({ text }) => {
  return (
    <Tooltip mouseEnterDelay={0.5} placement="right" trigger={['hover']} overlay={text}>
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {text}
      </div>
    </Tooltip>
  );
};

export default TextOverflow;
