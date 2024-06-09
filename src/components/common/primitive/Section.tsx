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
      <h2>{heading}</h2>
      {children}
    </SectionStyles>
  );
};

export default Section;
