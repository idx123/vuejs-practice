module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    semi: ['error', 'always'],
    // 'indent': ["error", 2],
    'comma-spacing': ['error', { before: false, after: true }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default'],
      },
    ],
    'vue/html-closing-bracket-spacing': ['error'],
    'vue/html-end-tags': ['error'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
        },
      },
    ],
  },
};
