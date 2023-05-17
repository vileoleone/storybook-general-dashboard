import Main from '@/components/Sections/QueueConfigComponents/Main.vue'
export default {
  title: 'Molecule Stories/Sections/QueueConfiguration',
  component: Main,
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

export const MainCard = {
  render: (args) => ({
    components: { Main },
    setup() {
      return { args }
    },
    template: '<Main v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF'
  }
}
