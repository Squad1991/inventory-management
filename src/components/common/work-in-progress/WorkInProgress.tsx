import React from 'react';
import UnderContructionImg from '~src/assets/img/work-under-construction.png';
import Image from '~src/components/common/image/Image';
import Center from '~src/components/common/primitive/Center';
import Stack from '~src/components/common/primitive/Stack';

type WorkInProgressProps = React.ComponentProps<typeof Image>;

const WorkInProgress: React.FC<WorkInProgressProps> = props => {
  return (
    <Stack>
      <Image src={UnderContructionImg} {...props} />{' '}
      <Center>
        <h2>Coming Soon</h2>
      </Center>
    </Stack>
  );
};

export default React.memo(WorkInProgress);
