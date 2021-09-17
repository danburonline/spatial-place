module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  globals: {
    React: true,
    JSX: true,
    context: true
  },
  ignorePatterns: ['.eslintrc.js', '.next', 'node_modules']
}
