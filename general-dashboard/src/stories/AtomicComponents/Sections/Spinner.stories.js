import SpinnerLoader from '@/components/Sections/QueueConfigComponents/AtomicComponents/SpinnerLoader.vue'
export default {
  title: 'Atom Stories/Sections',
  component: SpinnerLoader,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    innerBackgroundColor: {
      control: 'color'
    },
    onClick: { control: { actions: 'clicked' } },
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    }
  }
}

export const SpinnerLoaderStory = {
  render: (args) => ({
    components: { SpinnerLoader },
    setup() {
      return { args }
    },
    template: '<SpinnerLoader v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'SpinnerLoader',
    backgroundColor: '#FFFFFF',
  }
}
