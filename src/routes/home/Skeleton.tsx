import { css } from '@compiled/react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Stack from '~src/components/common/primitive/Stack';

const HomePageSkelton: React.FC = () => {
  return (
    <Stack css={css({ gap: '.5rem', position: 'relative', lineHeight: '1.5rem' })}>
      <Skeleton width={'20%'} height={10} />
      <Skeleton
        width={'20rem'}
        inline
        style={{ marginInlineEnd: '1rem' }}
        count={20}
        height={200}
      />
    </Stack>
  );
};

export default React.memo(HomePageSkelton);
