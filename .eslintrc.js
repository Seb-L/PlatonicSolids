module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'curly': 'off',
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
  }
}
