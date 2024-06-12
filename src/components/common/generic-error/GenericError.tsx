import { css } from '@compiled/react';
import React from 'react';
import SomethingWentWrongImg from '~src/assets/img/something-went-wrong.png';
import Image from '~src/components/common/image/Image';
import Center from '~src/components/common/primitive/Center';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import Stack from '~src/components/common/primitive/Stack';

type GenericErrorProps = React.ComponentProps<typeof Image>;

/**
 * Renders generic error component with a default message
 */

const SomethingWentWrong: React.FC<GenericErrorProps> = props => {
  return (
    <EmptyCard
      testId="generic-error"
      message={
        <Stack css={css({ textAlign: 'center' })}>
          <Image height={'400rem'} src={SomethingWentWrongImg} {...props} />
          <Center>
            <h2 data-testid="error-msg">We are working to get things up</h2>
          </Center>
        </Stack>
      }
    />
  );
};

export default React.memo(SomethingWentWrong);
