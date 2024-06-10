import { styled } from '@compiled/react';
import React from 'react';
import { FiLoader } from 'react-icons/fi';
import Center from '~src/components/common/primitive/Center';

const SpinnerStyles = styled(Center)({
  color: 'var(--icon-color-default)',
  animation: 'loading-animation 2s infinite',
});

const AppLoadingSpinner: React.FC = () => {
  return (
    <SpinnerStyles>
      <FiLoader size={'2rem'} />
    </SpinnerStyles>
  );
};

export default AppLoadingSpinner;
