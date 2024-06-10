import '@compiled/babel-plugin';
import '@compiled/react';
import '@compiled/react/runtime';

const { toHaveNoViolations } = require('jest-axe');
expect.extend(toHaveNoViolations);
