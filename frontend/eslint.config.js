import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  typescript: true,
  vue: {
    overrides: {
      'vue/block-order': [
        'error',
        {
          order: [['script', 'template'], 'style'],
        },
      ],
      'vue/multi-word-component-names': ['off'],
      'vue/max-attributes-per-line': 'off',
      'vue/static-class-names-order': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-indent': ['error', 2],
      'vue/no-v-text-v-html-on-component': 'off',
    },
  },
  stylistic: {
    overrides: {
      'style/brace-style': ['warn', '1tbs'],
      'node/prefer-global': 'off',
      'node/prefer-global/buffer': 'off',
      'antfu/no-import-dist': 'off',
      'no-console': 'off',
      'style/semi': ['error', 'never'],
      'style/comma-dangle': ['error', 'only-multiline'],
      'style/arrow-parens': 'off',
      'style/quotes': ['error', 'single'],
      'style/comma-spacing': 'off',
      'style/func-call-spacing': 'off',
      'style/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],
      'style/object-curly-spacing': [2, 'always'],
    },
  },

  ignores: [
    '**/node_modules',
    '**/dist',
    '**/.nuxt',
    '**/.output',
    '**/coverage',
    '**/.histoire',
    '**/public',
  ],
})
