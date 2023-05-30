import FormSearchTable from '@/components/Sections/QueueConfigComponents/Components/FormSearchTable.vue'
import FormMappingFile from '@/components/Sections/QueueConfigComponents/Components/FormMappingFile.vue'
import Form from '@/components/Sections/QueueConfigComponents/Components/Form.vue'

export default {
  title: 'Components/Forms/OptionForms',
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

export const OptionFormStory = {
  render: (args) => ({
    components: { Form },
    setup() {
      return { args }
    },
    template: '<Form v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Form',
    backgroundColor: '#FFFFFF',
    width: '500px',
    list: ['exemplo1', 'exemplo2', 'exemplo3'],
    placeholder: 'Escolha uma opção',
    onChoice: (item) => {
      console.log(item)
    }
  }
}

export const OptionFormQueueChoiceStory = {
  render: (args) => ({
    components: { Form },
    setup() {
      return { args }
    },
    template: '<Form v-bind="args" />'
  }),
  args: {
    primary: true,
    backgroundColor: '#FFFFFF',
    label: 'Escolha uma fila * ',
    width: '500px',
    list: ['exemplo1', 'exemplo2', 'exemplo3'],
    placeholder: 'Escolha uma opção',
    onChoice: (item) => {
      console.log(item)
    }
  }
}

export const OptionFormMappingStepComponent = {
  render: (args) => ({
    components: { FormMappingFile },
    setup() {
      return { args }
    },
    template:
      '<div style="max-width:750px; min-width: 725px; border: 1px solid blue;"><FormMappingFile v-bind="args" /></div>'
  }),
  args: {
    primary: true,
    label: 'Código único',
    width: '360px',
    list: ['exemplo1', 'exemplo2', 'exemplo3'],
    placeholder: 'Escolha uma opção',
    onChoice: (item) => {
      console.log(item)
    }
  }
}
