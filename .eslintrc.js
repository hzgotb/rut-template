/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 0,
    'arrow-body-style': 0,
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'import/prefer-default-export': 0,
    'import/extensions': [0, 'always', {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
  settings: {
    // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = config;
