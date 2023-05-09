import type { Meta, StoryObj } from '@storybook/vue3';

import NavCard from './NavCard.vue';

const meta: Meta<typeof NavCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Header/NavSections',
  component:NavCard,
};

export default meta;

type Story = StoryObj<typeof NavCard>;

export const  Primary: Story = {
  render: () => ({
    components: { NavCard },
    template: '<NavCard/>',
  }),
};