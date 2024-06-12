import { styled } from '@compiled/react';
import React from 'react';
import Stack from '~src/components/common/primitive/Stack';

interface SectionProps extends React.PropsWithChildren {
  heading: string;
}

const SectionStyles = styled(Stack)({
  gap: '1rem',
});

const Section: React.FC<SectionProps> = ({ heading, children }) => {
  return (
    <SectionStyles>
      <h3>{heading}</h3>
      {children}
    </SectionStyles>
  );
};

export default React.memo(Section);
