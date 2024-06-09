import { css } from '@compiled/react';
import React from 'react';
import Inline from '~src/components/common/primitive/Inline';

const Votes = ({ votes }: { votes: number }) => {
  return <Inline css={css({ alignItems: 'center', gap: '0.5rem' })}>{votes} Votes</Inline>;
};

export default Votes;
