import type { Meta, StoryObj } from '@storybook/vue3';

import Home from './Home.vue';

const meta: Meta<typeof Home> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/NavSections',
  component:Home,
};

export default meta;

type Story = StoryObj<typeof Home>;

export const  Primary: Story = {
  render: () => ({
    components: { Home },
    template: '<Home/>',
  }),
};