import { css, styled } from '@compiled/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '~src/components/common/logo/Logo';
import IconContainer from '~src/components/common/primitive/IconContainer';
import Stack from '~src/components/common/primitive/Stack';

const FooterWrapper = styled.footer({
  textAlign: 'center',
  display: 'flex',
  gap: '1rem',
  fontSize: '1.5rem',
  paddingBlockStart: '1rem',
  justifyContent: 'center',
  borderTop: '1px solid #e0e0e0',
  paddingBlockEnd: '1rem',
});

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Stack css={css({ gap: '1rem', alignItems: 'center' })}>
        <Logo />
        <IconContainer>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
        </IconContainer>
      </Stack>
    </FooterWrapper>
  );
};

export default React.memo(Footer);
