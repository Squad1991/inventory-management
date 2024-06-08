import { type CssFunction } from '@compiled/react';

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CssFunction<void> | CssFunction<void>[];
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CssFunction<void> | CssFunction<void>[];
    }
  }
}
