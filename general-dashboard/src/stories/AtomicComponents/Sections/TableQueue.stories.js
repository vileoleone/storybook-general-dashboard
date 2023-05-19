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
      return { args }
    },
    template: '<TableQueue v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'TableQueue',
    backgroundColor: '#FFFFFF',
    queueName: 'arquivoexemplo',
    queueData: {
      createdAt: '08/03/2022',
      data: [
        {
          id: 1,
          nome: 'francielle',
          numero: 9423984732,
          cidade: 'campo grande',
          cep: '47238472',
          rua: 'loiaola,',
          bairro: 'tiradentes'
        },
        {
          id: 1,
          nome: 'Carlos',
          numero: 9423984732,
          cep: '47238472',
          rua: '',
          bairro: 'tiradentes'
        },
        {
          id: 1,
          nome: 'Pedro',
          numero: 9423984732,
          cidade: 'campo grande',
          cep: '47238472',
          rua: 'loiaolaa,'
        }
      ]
    }
  }
}

export const TableQueueStoryNoData = {
  render: (args) => ({
    components: { TableQueue },
    setup() {
      return { args }
    },
    template: '<TableQueue v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'TableQueue',
    backgroundColor: '#FFFFFF',
  }
}