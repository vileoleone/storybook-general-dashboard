import TableQueueVue from '@/components/Sections/QueueConfigComponents/AtomicComponents/TableQueue.vue'
export default {
  title: 'Molecule Stories/Sections/QueueConfiguration',
  component: TableQueueVue,
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

export const TableQueueVueTable = {
  render: (args) => ({
    components: { TableQueueVue },
    setup() {
      return { args }
    },
    template: '<TableQueueVue v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'TableQueueVue',
    backgroundColor: '#FFFFFF',
    queues: {
      name: 'nomedoaquivoimportado.csv',
      date: '08/03/2023',
      data: {
        nomedacoluna: 'itemdacoluna',
        nomedacoluna2: 'itemdacoluna',
        nomedacoluna3: 'itemdacoluna'
      }
    }
  }
}
