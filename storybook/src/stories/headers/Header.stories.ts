import type { Meta, StoryObj } from '@storybook/vue3';

import MyHeader from '../headers/PrimaryHeader.vue';

const meta: Meta<typeof MyHeader> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Header',
  component: MyHeader,
};

export default meta;

type Story = StoryObj<typeof MyHeader>;

export const  Header: Story = {
  render: () => ({
    components: { MyHeader },
    template: '<MyHeader/>',
  }),
};