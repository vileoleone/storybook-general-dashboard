import SearchSubHeader from '@/components/Sections/QueueConfigComponents/AtomicComponents/SearchSubHeader.vue'
export default {
  title: 'Atom Stories/Sections',
  component: SearchSubHeader,
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

export const SearchSubHeaderComponent = {
  render: (args) => ({
    components: { SearchSubHeader },
    setup() {
      return { args }
    },
    template: '<SearchSubHeader v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'SearchSubHeader',
    backgroundColor: '#FFFFFF',
    value: {}
  }
}
