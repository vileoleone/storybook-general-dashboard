import MappingFileStep from '@/components/Sections/QueueConfigComponents/RightSectionSteps/MappingFileStep.vue'
import Main from '@/components/Sections/QueueConfigComponents/Main.vue'
import FileStep from '@/components/Sections/QueueConfigComponents/RightSectionSteps/FileStep.vue'
export default {
  title: 'Molecule Stories/Sections/QueueConfiguration',
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
