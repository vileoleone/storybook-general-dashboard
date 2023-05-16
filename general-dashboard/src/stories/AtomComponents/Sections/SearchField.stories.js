import SearchField from '@/components/Sections/MailingSectionComponents/SearchField.vue'
export default {
  title: 'Atoms/Sections/MailingMainSection/SearchField',
  component: SearchField,
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

export const SearchFieldComponent= {
  render: (args) => ({
    components: { SearchField },
    setup() {
      return { args }
    },
    template: '<SearchField v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'SearchField',
    backgroundColor: '#FFFFFF',
    value: {}
  }
}
