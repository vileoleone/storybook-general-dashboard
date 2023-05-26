import FieldNoQueueSign from '@/components/Sections/QueueConfigComponents/AtomicComponents/FieldNoQueueSign.vue'
import FieldNoColumnSign from '@/components/Sections/QueueConfigComponents/AtomicComponents/FieldNoColumnSign.vue'

export default {
  title: 'Atom Stories/Fields/Signs',
  component: FieldNoQueueSign,
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

export const NoQueueSignStory = {
  render: (args) => ({
    components: { FieldNoQueueSign },
    setup() {
      return { args }
    },
    template:
      '<div style="border: 1px solid #C5C5C5; height: 200px; width: 300px "><FieldNoQueueSign v-bind="args" /></div>'
  }),
  args: {
    primary: true,
    label: 'FieldNoQueueSign',
    backgroundColor: '#FFFFFF'
  }
}

export const NoColumnSignStory = {
  render: (args) => ({
    components: { FieldNoColumnSign },
    setup() {
      return { args }
    },
    template:
      '<div style="border: 1px solid #C5C5C5; height: 200px; width: 300px "><FieldNoColumnSign v-bind="args" /></div>'
  }),
  args: {
    primary: true,
    label: 'FieldNoColumnSign',
    backgroundColor: '#FFFFFF'
  }
}
