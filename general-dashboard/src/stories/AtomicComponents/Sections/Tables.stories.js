import TableCsvQueues from '@/components/Sections/QueueConfigComponents/AtomicComponents/TableCsvQueues.vue'
import TableNotMappedColumns from '#/Sections/QueueConfigComponents/AtomicComponents/TableNotMappedColumns.vue'
import TableMappedColumns from '#/Sections/QueueConfigComponents/AtomicComponents/TableMappedColumns.vue'
export default {
  title: 'Molecule Stories/Tables',
  component: TableCsvQueues,
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

export const TableCsvQueuesStory = {
  render: (args) => ({
    components: { TableCsvQueues },
    setup() {
      return { args }
    },
    template: '<TableCsvQueues v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'TableCsvQueues',
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
          bairro: 'tiradentes',
          telefone: 3242342,
          celular: 13231312,
          complemento: 'perto da esquina'
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

export const TableCsvQueuesStoryNoData = {
  render: (args) => ({
    components: { TableCsvQueues },
    setup() {
      return { args }
    },
    template: '<TableCsvQueues v-bind="args" />'
  }),
  decorators: [() => ({ template: '<div style="border: 1px solid blue;"><story /></div>' })],
  args: {
    primary: true,
    label: 'TableCsvQueues',
    backgroundColor: '#FFFFFF'
  }
}

export const NotMappedColumnTable = {
  render: (args) => ({
    components: { TableNotMappedColumns },
    setup() {
      return { args }
    },
    template: '<TableNotMappedColumns v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'TableNotMappedColumns'
  }
}

export const MappedColumnTable = {
  render: (args) => ({
    components: { TableMappedColumns },
    setup() {
      return { args }
    },
    template: '<TableMappedColumns v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'TableMappedColumns'
  }
}

export const MappedColumnTable = {
  render: (args) => ({
    components: { TableMappedColumns },
    setup() {
      return { args }
    },
    template: '<TableMappedColumns v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'TableMappedColumns'
  }
}
