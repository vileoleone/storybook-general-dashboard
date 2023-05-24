/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import PrimeVue from 'primevue/config'
import '@quasar/extras/mdi-v4/mdi-v4.css'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import 'quasar/dist/quasar.css'
setup((app) => {
  app.use(createPinia()), app.use(Quasar, {}), app.use(PrimeVue)
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
        order: ['Atom Stories', 'Molecule Stories', 'Pages', '*']
      }
    }
  }
}

export default preview

// .storybook/preview.js|ts
