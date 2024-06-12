import { css } from '@compiled/react';
import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IconContainer from '~src/components/common/primitive/IconContainer';

const Logo: React.FC = () => {
  return (
    <IconContainer css={css({ fontSize: '1.5rem' })}>
      <FaCameraRetro />
      <Link to={'/'}>Movie Database</Link>
    </IconContainer>
  );
};

export default React.memo(Logo);
