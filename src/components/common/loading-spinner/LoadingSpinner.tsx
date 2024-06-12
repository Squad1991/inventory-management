import { css, styled } from '@compiled/react';
import React from 'react';
import { FiLoader } from 'react-icons/fi';

const SpinnerStyles = styled.div({
  color: 'var(--icon-color-default)',
  margin: '0',
  position: 'absolute',
  zIndex: 1000,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const LoadingAnimationCSS = css({ animation: 'spin-animation 1s infinite' });

const AppLoadingSpinner: React.FC = () => {
  return (
    <SpinnerStyles>
      <FiLoader css={LoadingAnimationCSS} size={'3rem'} />
    </SpinnerStyles>
  );
};

export default React.memo(AppLoadingSpinner);
