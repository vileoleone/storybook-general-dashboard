import LeftSection from '@/components/Sections/QueueConfigComponents/CompositeComponents/LeftSection.vue'
export default {
  title: 'Composite Components/Mailing Configuration/Left Section Steps',
  component: LeftSection,
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

export const QueueLeftSectionCard = {
  render: (args) => ({
    components: { LeftSection },
    setup() {
      return { args }
    },
    template: '<LeftSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Etapas de Importação',
    backgroundColor: '#FFFFFF',
    dict: {
      Fila: 'Nome da fila escolhida',
      Arquivo: 'nome_do_arquivo.csv',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    },
    step: 0
  }
}

export const FileSectionCard = {
  render: (args) => ({
    components: { LeftSection },
    setup() {
      return { args }
    },
    template: '<LeftSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Etapas de Importação',
    backgroundColor: '#FFFFFF',
    dict: {
      Fila: 'Nome da fila escolhida',
      Arquivo: 'nome_do_arquivo.csv',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    },
    step: 1
  }
}

export const FileMappingSectionCard = {
  render: (args) => ({
    components: { LeftSection },
    setup() {
      return { args }
    },
    template: '<LeftSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Etapas de Importação',
    backgroundColor: '#FFFFFF',
    dict: {
      Fila: 'Nome da fila escolhida',
      Arquivo: 'nome_do_arquivo.csv',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    },
    step: 2
  }
}

export const PerfillatorMappingSectionCard = {
  render: (args) => ({
    components: { LeftSection },
    setup() {
      return { args }
    },
    template: '<LeftSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Etapas de Importação',
    backgroundColor: '#FFFFFF',
    dict: {
      Fila: 'Nome da fila escolhida',
      Arquivo: 'nome_do_arquivo.csv',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    },
    step: 3
  }
}

export const FileFieldMappingSectionCard = {
  render: (args) => ({
    components: { LeftSection },
    setup() {
      return { args }
    },
    template: '<LeftSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Etapas de Importação',
    backgroundColor: '#FFFFFF',
    dict: {
      Fila: 'Nome da fila escolhida',
      Arquivo: 'nome_do_arquivo.csv',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    },
    step: 4
  }
}

export const ImportSectionCard = {
  render: (args) => ({
    components: { LeftSection },
    setup() {
      return { args }
    },
    template: '<LeftSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Etapas de Importação',
    backgroundColor: '#FFFFFF',
    dict: {
      Fila: 'Nome da fila escolhida',
      Arquivo: 'nome_do_arquivo.csv',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    },
    step: 5
  }
}
