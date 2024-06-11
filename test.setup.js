import '@testing-library/jest-dom';
import * as matchers from 'jest-extended';

const { toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

expect.extend(matchers);
