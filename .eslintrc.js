module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin',
    'eslint-plugin-promise',
    'import',
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'unused-imports',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },

  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'no-debugger': 'error',
    'import/no-duplicates': 'error',
    'react/jsx-no-literals': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'prettier/prettier': 'warn',
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true, allowFunctions: true }],
    'react/no-unstable-nested-components': 'warn',
    'react/no-unused-prop-types': ['warn', { skipShapeProps: true }],
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-key': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'no-console': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'node_modules',
        message: 'Should not import from node_modules',
      },
    ],
    'promise/prefer-await-to-then': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        argsIgnorePattern: '^_',
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },
};
