module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    parser: 'babel-eslint',
  },
  extends: [],
  rules: {
    'semi': ['warn', 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-trailing-spaces': ['warn', {
      skipBlankLines: false,
      ignoreComments: true,
    }],
    'space-before-function-paren': ['warn', 'always'],
    'no-console': 'off',
    'no-cond-assign': ['error', 'always'],
    'indent': ['warn', 2],
    'arrow-parens': ['warn', 'as-needed'],
    'no-prototype-builtins': 'warn',
    'no-unused-vars': 'warn',
    'template-curly-spacing': 'warn',
    'key-spacing': ['warn', {
      'beforeColon': false,
      'afterColon': true,
      'mode': 'strict',
    }],
    'no-multiple-empty-lines': ['warn', {
      max: 2,
      maxEOF: 1,
    }],
    'quote-props': ['warn', 'consistent-as-needed'],
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'padded-blocks': ['warn', 'never'],
    'eol-last': ['warn', 'always'],
    'quotes': ['warn', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
  },
}
