declare module '*.svg' {
  const content: string;
  export default content;
}

declare module jest {
  interface Matchers<R> {
    toHaveNoViolations(): R;
  }
}

declare module '*.png';
