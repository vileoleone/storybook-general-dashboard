import TableQueue from '@/components/Sections/QueueConfigComponents/AtomicComponents/TableQueue.vue'

export default {
  title: 'Atom Stories/Sections',
  component: TableQueue,
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

export const TableQueueStory = {
  render: (args) => ({
    components: { TableQueue },
    setup() {
      return {args}
    },
    template: '<TableQueue v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'TableQueue',
    backgroundColor: '#FFFFFF',
  }
}
