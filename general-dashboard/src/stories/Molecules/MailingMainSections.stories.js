import MappingFileStep from '@/components/Sections/QueueConfigComponents/RightSectionSteps/MappingFileStep.vue'
import Main from '@/components/Sections/QueueConfigComponents/MailingMainSection.vue'
import FileStep from '@/components/Sections/QueueConfigComponents/RightSectionSteps/FileStep.vue'
import QueueStep from '@/components/Sections/QueueConfigComponents/RightSectionSteps/QueueStep.vue'
export default {
  title: 'Molecule Stories/Mailing/Main',
  component: MappingFileStep,
  Main,
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
export const QueueStepStory = {
  render: (args) => ({
    components: { Main, QueueStep },
    setup() {
      return { args }
    },
    template: '<Main v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    step: 0,
    queues: ['filafonacao', 'filaatendimento'],
    Label: 'Mapeamento',
    vueComponent: QueueStep
  }
}

export const FileStepStory = {
  render: (args) => ({
    components: { Main, FileStep },
    setup() {
      return { args }
    },
    template: '<Main v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Arquivo',
    backgroundColor: '#FFFFFF',
    step: 0,
    index: 1,
    list: ['filafonacao', 'filaatendimento'],
    Label: 'Mapeamento',
    vueComponent: FileStep
  }
}

export const MappingFileStepStory = {
  render: (args) => ({
    components: { Main, MappingFileStep },
    setup() {
      return { args }
    },
    template: '<Main v-bind="args"/>'
  }),
  args: {
    primary: true,
    label: 'Mapeamento',
    backgroundColor: '#FFFFFF',
    vueComponent: MappingFileStep
  }
}
