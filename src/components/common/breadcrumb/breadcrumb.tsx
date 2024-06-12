import { styled } from '@compiled/react';
import React from 'react';

interface BreadcrumbItem {
  text: string;
  onClick?: () => void;
  link: string;
  testId?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbItem = styled.li({
  display: 'inline',
  cursor: 'pointer',
  '&:not(:last-child):after': {
    content: "'/'",
    margin: '0 0.5rem',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <BreadcrumbItem data-testid={item.testId} onClick={item.onClick} key={item.text}>
            {item.text}
          </BreadcrumbItem>
        ))}
      </ol>
    </nav>
  );
};

export default React.memo(Breadcrumb);
