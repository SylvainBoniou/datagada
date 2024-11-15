module.exports = {
    globals: {
      __PATH_PREFIX__: true,
      document: true,
      window: true,
      localStorage: true,
      screen: true,
    },
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    overrides: [
      {
        files: ['*.js'],
        rules: {
          'prettier/prettier': ['error'],
        },
      },
    ],
    parser: 'babel-eslint',
    rules: {
      'prettier/prettier': ['error'],
      'global-require': 0,
      'no-loop-func': 0,
      'import/extensions': 0,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/prefer-default-export': 0,
      'no-multi-assign': 0,
      'no-restricted-globals': 0,
      'react-hooks/exhaustive-deps': 0,
      'react/jsx-one-expression-per-line': 0,
      'react/no-unescaped-entities': 0,
      'react/prop-types': 0,
      'react/state-in-constructor': 0,
      'no-empty': 0,
      'react/destructuring-assignment': 0,
      'react/no-access-state-in-setstate': 0,
      'no-await-in-loop': 0,
      'no-constant-condition': 0,
      'react/jsx-filename-extension': 0,
    },
  };
  