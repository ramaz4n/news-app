module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
    'unused-imports',
    'dirs',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unicorn',
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React',
      // Pragma to use, default to "React"
      fragment: 'Fragment',
      // Fragment to use (maybe a property of <pragma>), default to "Fragment"
      version: 'detect',
      // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc., if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: '0.53',
      // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      {
        property: 'freeze',
        object: 'Object',
      },
      {
        property: 'myFavoriteWrapper',
      },
      // for rules that check exact prop wrappers
      {
        property: 'forbidExtraProps',
        exact: true,
      },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      'observer',
      // `property`
      {
        property: 'styled',
      },
      // `object` is optional
      {
        property: 'observer',
        object: 'Mobx',
      },
      {
        property: 'observer',
        object: '<pragma>',
      },
      // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      'CustomForm',
      {
        name: 'Form',
        formAttribute: 'endpoint',
      },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      {
        name: 'Link',
        linkAttribute: 'to',
      },
    ],
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Eslint common
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    //    Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Unused imports
    'unused-imports/no-unused-imports': 'error',
    // Simple import sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^(react)(\\/.*|$)', '^next'],
          ['^@?\\w'],
          ['^~(src)(/.*|$)'],
          ['^~(mocks)(/.*|$)'],
          ['^\\.'],
          ['(gif|jpe?g|tiff?|png|webp|bmp)$'],
          ['(css)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    // Unicorn
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/consistent-function-scoping': 'off',
    // Dirs
    'dirs/dirnames': [
      2,
      {
        pattern: '^[a-z-]+$',
      },
    ],
    // React
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        shorthandFirst: true,
        reservedFirst: true,
        multiline: 'last',
      },
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    // TypeScript
    'typescript-sort-keys/interface': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: false,
        requiredFirst: true,
      },
    ],
    'typescript-sort-keys/string-enum': [
      'error',
      'asc',
      {
        caseSensitive: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default': 'off',
  },
};
