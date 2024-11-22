import antfu from '@antfu/eslint-config';

export default antfu({
  vue: true,
  astro: true,
}, {
  rules: {
    'style/semi': ['error', 'always'],
    'no-console': 'off',
    'no-alert': 'off',
  },
});
