import type { Meta, StoryObj } from '@storybook/vue3';
import NavButtons from './navbuttons.vue'

const meta: Meta<typeof NavButtons> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Header/navButtons',
  component:NavButtons,
};

export default meta;

type Story = StoryObj<typeof NavButtons>;

export const  Primary: Story = {
  render: () => ({
    components: {NavButtons },
    template: 'NavButtons/>',
  }),
};