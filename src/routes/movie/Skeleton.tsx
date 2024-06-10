import { css } from '@compiled/react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Stack from '~src/components/common/primitive/Stack';

const MovieInfoPageSkelton: React.FC = () => {
  return (
    <Stack css={css({ gap: '2rem', position: 'relative', lineHeight: '1.5rem' })}>
      <Stack>
        <Skeleton enableAnimation width={'100%'} height={300} />
        <Skeleton width={'20%'} height={10} />
        <Skeleton width={'40%'} height={10} />
        <Skeleton count={3} height={10} />
      </Stack>
      <Stack>
        <Skeleton width={'20%'} height={10} />
        <Skeleton count={3} height={60} />
      </Stack>
      <Stack>
        <Skeleton width={'20%'} height={10} />
        <Skeleton
          width={'20rem'}
          inline
          style={{ marginInlineEnd: '1rem' }}
          count={3}
          height={200}
        />
      </Stack>
    </Stack>
  );
};

export default MovieInfoPageSkelton;
