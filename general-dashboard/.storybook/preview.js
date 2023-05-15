/** @type { import('@storybook/vue3').Preview } */

const customViewports = {
  kindleFire2: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '769px',
    },
  },
};

const preview = {
  parameters: {
    viewport: { viewports: customViewports },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview

// .storybook/preview.js|ts
