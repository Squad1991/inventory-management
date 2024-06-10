/** @type {import('@swc/jest')} */
module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest', { configFile: './babel.test.json' }],
  },
  transformIgnorePatterns: ['node_modules/(?!(@compiled|@parcel|ordered-binary))'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': 'css-loader',
    '~src/(.*)': '<rootDir>/src/$1',
  },
  testMatch: [`${__dirname}/**/__tests__/**/?(*.)(spec).(js|ts)?(x)`],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json'],
};
