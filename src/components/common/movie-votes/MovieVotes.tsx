import { css } from '@compiled/react';
import React from 'react';
import Inline from '~src/components/common/primitive/Inline';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';

export interface VotesProps extends ComponentPropsWithTestId {
  /** Number of votes */
  votes: number;
}

/**
 * Render the votes in formatted way
 */

const Votes = ({ votes }: { votes: number }) => {
  return (
    <Inline css={css({ alignItems: 'center', gap: '0.5rem' })}>
      {votes.toLocaleString()} Votes
    </Inline>
  );
};

export default React.memo(Votes);
