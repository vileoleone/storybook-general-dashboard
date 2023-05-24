import FormSearchTable from '@/components/Sections/QueueConfigComponents/AtomicComponents/FormSearchTable.vue'
export default {
  title: 'Atom Stories/FormSearchTable',
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

export const FormSearchTableComponent = {
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
