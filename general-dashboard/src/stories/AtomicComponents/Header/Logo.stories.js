import Logo from '#/Header/Logo.vue'
export default {
  title: 'Atom Stories/Headers/Logos',
  component: Logo,
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

export const LogoStory = {
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
