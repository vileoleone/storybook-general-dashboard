import Alert from '@/components/Sections/QueueConfigComponents/Components/Alert.vue'
import AlertNoQueueIcon from '%/icons/AlertNoQueueIcon.svg'
import AlertNoColumnIcon from '%/icons/AlertNoColumnIcon.svg'
export default {
  title: 'Components/Alerts',
  component: Alert,
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

export const AlertNoQueueStory = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template:
      '<div style="border: 1px solid #C5C5C5; height: 200px; width: 300px "><Alert v-bind="args" /></div>'
  }),
  args: {
    primary: true,
    label: 'AlertNoQueue',
    icon: AlertNoQueueIcon,
    text: 'Termo não encontrado',
    subtext: 'Não encontramos nenhum arquivo com este nome, verifique e tente novamente'
  }
}

export const AlertNoColumnStory = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template:
      '<div style="border: 1px solid #C5C5C5; height: 200px; width: 300px "><Alert v-bind="args" /></div>'
  }),
  args: {
    primary: true,
    label: 'AlertNoColumn',
    icon: AlertNoColumnIcon,
    text: 'Coluna Mapeada',
    subtext: 'Verifique na tabela Abaixo'
  }
}
