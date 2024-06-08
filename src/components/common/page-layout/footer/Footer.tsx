import { styled } from '@compiled/react';
import React from 'react';

const FooterWrapper = styled.footer({
  width: '100%',
  textAlign: 'center',
});

const Footer: React.FC = () => {
  return <FooterWrapper>Footer links</FooterWrapper>;
};

export default Footer;
