import FieldSpinnerLoader from '@/components/Sections/QueueConfigComponents/AtomicComponents/FieldSpinnerLoader.vue'
export default {
  title: 'Atom Stories/Spinners',
  component: FieldSpinnerLoader,
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

export const FieldSpinnerLoaderStory = {
  render: (args) => ({
    components: { FieldSpinnerLoader },
    setup() {
      return { args }
    },
    template: '<FieldSpinnerLoader v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'FieldSpinnerLoader',
    backgroundColor: '#FFFFFF'
  }
}
