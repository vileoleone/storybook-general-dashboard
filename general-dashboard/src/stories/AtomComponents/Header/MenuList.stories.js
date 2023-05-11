import MenuList from '../../../../src/components/Header/MenuList.vue'

export default {
  title: 'Atoms/Headers/MenuList',
  component: MenuList,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {control: {actions: 'clicked'}},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const MenuLists = {
  render: (args) => ({
    components: { MenuList },
    setup() {
      return { args };
    },
    template: '<MenuList v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Example',
    backgroundColor: '#FFFFFF',
    list: ['Agentes','Filas','Atendimentos', 'Campanhas', 'Geral'],
    marginBottom: 14.5
  },
};

export const MenuUser = {
  render: (args) => ({
    components: { MenuList },
    setup() {
      return { args };
    },
    template: '<MenuList v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Example',
    backgroundColor: '#FFFFFF',
    list: ['Login','LogOut'],
    marginBottom: 10
  },
};
