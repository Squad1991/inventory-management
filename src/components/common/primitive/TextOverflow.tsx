import Tooltip from 'rc-tooltip';
import React from 'react';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';

interface TextOverflowProps extends ComponentPropsWithTestId {
  text: string;
}

const TextOverflow: React.FC<TextOverflowProps> = ({ text, testId }) => {
  return (
    <Tooltip mouseEnterDelay={0.5} placement="right" trigger={['hover']} overlay={text}>
      <div
        data-testid={testId}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {text}
      </div>
    </Tooltip>
  );
};

export default TextOverflow;
