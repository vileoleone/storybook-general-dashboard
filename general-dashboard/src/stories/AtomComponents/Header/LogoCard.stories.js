import Logo from '../../../../src/components/Header/Logo.vue'
export default {
  title: 'Atoms/Headers',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    innerBackgroundColor: {
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

export const LogoCard = {
  render: (args) => ({
    components: { Logo },
    setup() {
      return { args };
    },
    template: '<Logo v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Logo',
    backgroundColor: '#FD9802',
  },
};
