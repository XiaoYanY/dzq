module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  globals: {
    location: true,
    React: 'writable'
  },
  overrides: [
    {
      files: ['bin/*.js', 'lib/*.js'],
      excludedFiles: '*.test.js',
      rules: {
        quotes: ['error', 'single']
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended'
  ],
  rules: {
    // 除了warn和error允许使用，其它console使用警告提示
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-use-before-define': 'off',
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 1,
    'react/jsx-one-expression-per-line': 0,
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^@@/', '^@alipay/bigfish/'],
        caseSensitive: true,
        commonjs: true
      }
    ],
    'import/order': 'warn',
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: [
          '**/tests/**.{ts,js,jsx,tsx}',
          '**/_test_/**.{ts,js,jsx,tsx}',
          '/mock/**/**.{ts,js,jsx,tsx}',
          '**/**.test.{ts,js,jsx,tsx}',
          '**/_mock.{ts,js,jsx,tsx}',
          '**/example/**.{ts,js,jsx,tsx}',
          '**/examples/**.{ts,js,jsx,tsx}'
        ]
      }
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': [0, 'camel-case'],
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'sort-imports': 0,
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   { functions: false, classes: false, variables: true, typedefs: true }
    // ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true }
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/naming-convention': 0,
    'import/no-cycle': 0,
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/require-default-props': 0,
    'react/jsx-fragments': 0,
    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0,
    'import/extensions': 0,
    'class-methods-use-this': 0
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] }
    },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign']
  }
};
