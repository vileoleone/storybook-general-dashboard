/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
setup((app) => {
  app.use(createPinia()), app.use(Quasar, {})
});
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
    },
    options: {
      storySort: {
        order: ['Atom Stories', 'Molecule', 'Pages' , '*']
      }
    }
  }
}

export default preview

// .storybook/preview.js|ts
