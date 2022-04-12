const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-tailwind-dark-mode',
    'storybook-dark-mode',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async config => {
    ;(config.resolve.modules = [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ]),
      (config.resolve.alias = {
        ...config.resolve.alias,
        '@com': path.resolve(__dirname, '../src/components'),
        '@hook': path.resolve(__dirname, '../src/hooks'),
        '@style': path.resolve(__dirname, '../src/styles'),
        '@config': path.resolve(__dirname, '../src/config'),
      })

    return config
  },
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
