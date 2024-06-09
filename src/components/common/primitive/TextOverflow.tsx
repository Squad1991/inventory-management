import React from 'react';

interface TextOverflowProps {
  text: string;
}

const TextOverflow: React.FC<TextOverflowProps> = ({ text }) => {
  return (
    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{text}</div>
  );
};

export default TextOverflow;
