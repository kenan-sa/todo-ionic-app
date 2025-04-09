module.exports = {
  root: true,
  env: {
      node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: './tsconfig.json',
  },
  plugins: [
      '@typescript-eslint',
      'react-hooks',
      'prettier', //
  ],
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
  ],
  rules: {
      'prettier/prettier': 'error',
      'linebreak-style': 'off',

      'no-empty': 'off',
      'no-empty-pattern': 'off',

      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',

      '@typescript-eslint/no-unused-vars': ['off'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
  },
  ignorePatterns: [
      'tailwind.config.ts', //
      'postcss.config.js', //
  ],
};
