import FileStep from '@/components/Sections/MailingSectionComponents/FileStep.vue'
export default {
  title: 'Elements/Sections/FileStep',
  component: FileStep,
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

export const FileStepTable = {
  render: (args) => ({
    components: { FileStep },
    setup() {
      return { args }
    },
    template: '<FileStep v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'FileStep',
    backgroundColor: '#FFFFFF',
    queues: {
      name: 'nomedoaquivoimportado.csv',
      date: '08/03/2023',
      data: {
        nomedacoluna: 'itemdacoluna',
        nomedacoluna2: 'itemdacoluna',
        nomedacoluna3: 'itemdacoluna'
      }
    }
  }
}
