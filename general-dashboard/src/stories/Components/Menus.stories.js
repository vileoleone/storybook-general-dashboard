import menuList from '@/components/Header/menuList.vue'
import MenuDragDatatypes from '@/components/Sections/QueueConfigComponents/Components/MenuDragDatatypes.vue'
export default {
  title: 'Components/Menus',
  component: menuList,
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
    components: { menuList },
    setup() {
      return { args }
    },
    template: '<menuList v-bind="args" />'
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

export const MenuDragDatatypestory = {
  render: (args) => ({
    components: { MenuDragDatatypes },
    setup() {
      return { args }
    },
    template:
      '<div style=" box-sizing:border-box; width:320px; overflow-y: scroll; border:1px solid blue;padding: 20px; padding-bottom:20px;"><MenuDragDatatypes v-bind="args"/></div>'
  }),
  args: {
    primary: true,
    data: [
      {
        fieldName: 'Perfilador',
        data: [
          { fieldName: 'UF', fieldtype: 'texto' },
          { fieldName: 'Cidade', fieldtype: 'texto' },
          { fieldName: 'Email', fieldtype: 'Email' },
          { fieldName: 'Data', fieldtype: 'Data' },
          { fieldName: 'Timestamp', fieldtype: 'Timestamp' },
          { fieldName: 'Data e HORA', fieldtype: 'Data e HORA' },
          { fieldName: 'URL', fieldtype: 'URL' },
          { fieldName: 'Verdadeiro/Falso', fieldtype: 'Verdadeiro/Falso' },
          { fieldName: 'complemento1', fieldtype: 'complemento1' },
          { fieldName: 'complemento2', fieldtype: 'complemento2' },
          { fieldName: 'complemento3', fieldtype: 'complemento3' },
          { fieldName: 'complemento4', fieldtype: 'complemento4' }
        ]
      },
      {
        fieldName: 'Sistema',
        data: [
          { fieldName: 'Telefone', fieldtype: 'texto' },
          { fieldName: 'Cidade', fieldtype: 'texto' },
          { fieldName: 'Email', fieldtype: 'Email' },
          { fieldName: 'Data', fieldtype: 'Data' },
          { fieldName: 'Timestamp', fieldtype: 'Timestamp' },
          { fieldName: 'Data e HORA', fieldtype: 'Data e HORA' },
          { fieldName: 'URL', fieldtype: 'URL' },
          { fieldName: 'Verdadeiro/Falso', fieldtype: 'Verdadeiro/Falso' },
          { fieldName: 'complemento1', fieldtype: 'complemento1' },
          { fieldName: 'complemento2', fieldtype: 'complemento2' },
          { fieldName: 'complemento3', fieldtype: 'complemento3' },
          { fieldName: 'complemento4', fieldtype: 'complemento4' }
        ]
      },
      {
        fieldName: 'Já utilizados',
        data: [
          { fieldName: 'Timestamp', fieldtype: 'texto' },
          { fieldName: 'Cidade', fieldtype: 'texto' },
          { fieldName: 'Email', fieldtype: 'Email' },
          { fieldName: 'Data', fieldtype: 'Data' },
          { fieldName: 'Timestamp', fieldtype: 'Timestamp' },
          { fieldName: 'Data e HORA', fieldtype: 'Data e HORA' },
          { fieldName: 'URL', fieldtype: 'URL' },
          { fieldName: 'Verdadeiro/Falso', fieldtype: 'Verdadeiro/Falso' }
        ]
      }
    ]
  }
}
