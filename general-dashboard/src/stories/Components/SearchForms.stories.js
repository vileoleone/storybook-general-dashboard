import FormSearchTable from '@/components/Sections/QueueConfigComponents/Components/FormSearchTable.vue'

export default {
  title: 'Components/Forms/SearchForm',
  component: FormSearchTable,
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

export const SearchFormComponent = {
  render: (args) => ({
    components: { FormSearchTable },
    setup() {
      return { args }
    },
    template: '<FormSearchTable v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'FormSearchTable',
    backgroundColor: '#FFFFFF',
    value: {}
  }
}
