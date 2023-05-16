import ListQueues from '@/components/Sections/MailingSectionComponents/ListQueues.vue'
export default {
  title: 'Atoms/Sections/ListQueuesTable',
  component: ListQueues,
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

export const ListQueuesTable = {
  render: (args) => ({
    components: { ListQueues },
    setup() {
      return { args }
    },
    template: '<ListQueues v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'ListQueues',
    backgroundColor: '#FFFFFF',
    queues: {
      name: 'nomedoaquivoimportado.csv',
      date: '08/03/2023',
      data: {
        nomedacoluna: 'itemdacoluna',
        nomedacoluna2: 'itemdacoluna',
        nomedacoluna3: 'itemdacoluna',
      }
    }
  }
}
