declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module jest {
  interface Matchers<R> {
    toHaveNoViolations(): R;
  }
}

declare module React {
  interface DOMAttributes<T> {
    'data-testid'?: string;
  }
}

declare module '*.png';
