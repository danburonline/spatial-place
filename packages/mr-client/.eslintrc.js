module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'prettier'
  ],
  globals: {
    React: true,
    JSX: true,
    context: true
  },
  ignorePatterns: ['.eslintrc.js', '.next', 'node_modules']
}
