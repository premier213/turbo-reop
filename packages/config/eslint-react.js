module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-dom/recommended',
    'plugin:unicorn/recommended',
    'plugin:testing-library/react',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'promise',
    'react',
    'jest-dom',
    'unicorn',
    'testing-library',
    'react-hooks',
    'jest',
    'tailwindcss',
  ],
  rules: {
    //tailwindcss
    'tailwindcss/no-custom-classname': 'off',
    //import
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // react
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^React$',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    // next
    '@next/next/no-html-link-for-pages': 'off',
    //eslint
    'no-undef': 'error',
    'no-restricted-imports': 'off',
    'no-console': 'warn',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return'],
      },
    ],
    //a11y
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    //typescript
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parser': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    jest: {
      version: require('jest/package.json').version,
    },
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
  ],
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
}
