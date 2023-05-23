import MenuList from '#/Header/MenuList.vue'

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

export const MenuUserStory = {
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
    list: ['Login', 'LogOut'],
    marginBottom: 0
  }
}
