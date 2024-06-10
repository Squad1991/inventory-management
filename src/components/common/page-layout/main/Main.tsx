import { styled } from '@compiled/react';

const Main = styled.main({
  overflowY: 'auto',
  position: 'relative',
  height: 'calc(100vh - var(--header-height))',
});

export default Main;
