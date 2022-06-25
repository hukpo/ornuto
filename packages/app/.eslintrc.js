module.exports = {
  extends: '../../eslintrc.base.js',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/forbid-elements': [
          'error',
          {
            forbid: [
              {
                element: 'Text',
                message: 'use <UIText> from @/ui-kit',
              },
              {
                element: 'ScrollView',
                message: 'use <UIScrollView> from @/ui-kit',
              },
            ],
          },
        ],
      },
    },
  ],
};
