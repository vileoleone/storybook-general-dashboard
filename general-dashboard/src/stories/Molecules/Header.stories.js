import Header from '@/components/Header/Header.vue'

export default {
  title: 'Molecule Stories/Headers',
  component: Header,
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

export const Headers = {
  render: (args) => ({
    components: { Header },
    setup() {
      return { args }
    },
    template: '<Header v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Example',
    backgroundColor: '#3D55AE'
  }
}
