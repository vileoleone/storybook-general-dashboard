import type { Meta, StoryObj } from '@storybook/vue3';
import NavButtons from './NavButtons.vue'
import { within } from '@storybook/testing-library';
import { userEvent } from '@storybook/testing-library'

const meta: Meta<typeof NavButtons> = {

  title: 'components/Header/navButtons',
  component:NavButtons,
  argTypes: { onClick: { action: 'button clicked' } },
  decorators: [() => ({ template: '<div style="width: 60px;"><story/></div>' })],
  tags: ['autodocs'], 
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default meta;

type Story = StoryObj<typeof NavButtons>;

export const  NavigationButtons: Story = {
  render: (args) => ({
    components: { NavButtons },
    setup() {
      return {args}
    },
    template: '<NavButtons v-bind="args" />',
  }),
    args : {
      text: 'home', 
  },
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  
}

export const  NavigationButtonsPlay: Story = {
  render: (args) => ({
    components: { NavButtons },
    setup() {
      return {args}
    },
    template: '<NavButtons v-bind="args" />',
  }),
    args : {
      text: 'home', 
  },
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  play: async ({canvasElement}) => {

    const canvas = within(canvasElement)
    const button =  canvas.getByText('home')
    await sleep(1000);
    await userEvent.click(button)
  }
}
