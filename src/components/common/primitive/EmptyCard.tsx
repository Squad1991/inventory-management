import React from 'react';
import Stack from '~src/components/common/primitive/Stack';

interface EmptyCardProps {
  message: string;
}

const EmptyCard: React.FC<EmptyCardProps> = ({ message }) => {
  return (
    <Stack>
      <p>{message}</p>
    </Stack>
  );
};

export default EmptyCard;
