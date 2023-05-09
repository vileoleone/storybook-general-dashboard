import type { StorybookConfig } from '@storybook/vue3-vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@etchteam/storybook-addon-status',
    '@storybook/addon-actions',
    '@storybook/test-runner',
    "@whitespace/storybook-addon-html"
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  features: { storyStoreV7: true, buildStoriesJson: true },
  docs: {
    autodocs: 'tag'
  }
}
export default config
