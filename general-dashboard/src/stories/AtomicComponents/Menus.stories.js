import MenuList from '#/Header/MenuList.vue'
import MenuDatatypes from '#/Sections/QueueConfigComponents/AtomicComponents/MenuDatatypes.vue'
export default {
  title: 'Atom Stories/Menus',
  component: MenuList,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
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

export const MenuStory = {
  render: (args) => ({
    components: { MenuList },
    setup() {
      return { args }
    },
    template: '<MenuList v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Example',
    backgroundColor: '#FFFFFF',
    list: [
      'Agentes',
      'Filas',
      { Atendimentos: ['Acompanhamento', 'Importação'] },
      'Campanhas',
      'Geral'
    ],
    marginBottom: 0
  }
}

export const MenuDatatypeStory = {
  render: (args) => ({
    components: { MenuDatatypes },
    setup() {
      return { args }
    },
    template: '<div style=" width:300px; overflow-y: scroll; border:1px solid blue; padding:20px;"><MenuDatatypes v-bind="args"/></div>'
  }),
  args: {
    primary: true,
    datatypeObject: {
      'Perfilador': {
        UF: 'texto',
        Cidade: 'texto',
        Email: 'Email',
        Data: 'Data',
        Timestamp: 'Timestamp',
        'Data e HORA': 'Data e HORA',
        URL: 'URL',
        'Verdadeiro/Falso': 'Verdadeiro/Falso',
        Telefone: 'Telefone',
        Decimal: 'Decimal',
        'Número inteiro': 'Número inteiro',
        Texto: 'Texto',
        'CPF/CNPJ': 'CPF/CNPJ',
        DDD: 'DDD',
        Selecionável: 'Selecionável'
      },
      'Sistema': {
        UF: 'texto',
        Cidade: 'texto',
        Email: 'Email',
        Data: 'Data',
        Timestamp: 'Timestamp',
        'Data e HORA': 'Data e HORA',
        URL: 'URL',
        'Verdadeiro/Falso': 'Verdadeiro/Falso',
        Telefone: 'Telefone',
        Decimal: 'Decimal',
        'Número inteiro': 'Número inteiro',
        Texto: 'Texto',
        'CPF/CNPJ': 'CPF/CNPJ',
        DDD: 'DDD',
        Selecionável: 'Selecionável'
      },
      'Já utilizados': {
        UF: 'texto',
        Cidade: 'texto',
        Email: 'Email',
        Data: 'Data',
        Timestamp: 'Timestamp',
        'Data e HORA': 'Data e HORA',
        URL: 'URL',
        'Verdadeiro/Falso': 'Verdadeiro/Falso',
        Telefone: 'Telefone',
        Decimal: 'Decimal',
        'Número inteiro': 'Número inteiro',
        Texto: 'Texto',
        'CPF/CNPJ': 'CPF/CNPJ',
        DDD: 'DDD',
        Selecionável: 'Selecionável'
      }
    }
  }
}
