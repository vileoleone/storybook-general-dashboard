import StepFileImport from '@/components/Sections/QueueConfigComponents/CompositeComponents/StepFileImport.vue'
import RightSection from '@/components/Sections/QueueConfigComponents/CompositeComponents/RightSection.vue'
import StepQueueChoice from '@/components/Sections/QueueConfigComponents/CompositeComponents/StepQueueChoice.vue'
import StepMappingFile from '@/components/Sections/QueueConfigComponents/CompositeComponents/StepMappingFile.vue'
export default {
  title: 'Composite Components/Mailing Configuration/Right Section Steps',
  component: StepFileImport,
  RightSection,
  StepQueueChoice,
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
    components: { RightSection, StepQueueChoice },
    setup() {
      return { args }
    },
    template: '<RightSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    step: 0,
    queues: ['filafonacao', 'filaatendimento'],
    vueComponent: StepQueueChoice
  }
}

export const FileStepStory = {
  render: (args) => ({
    components: { RightSection, StepFileImport },
    setup() {
      return { args }
    },
    template: '<RightSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Arquivo',
    backgroundColor: '#FFFFFF',
    step: 0,
    index: 1,
    list: ['filafonacao', 'filaatendimento'],
    vueComponent: StepFileImport
  }
}

export const StepMappingFileStory = {
  render: (args) => ({
    components: { RightSection, StepMappingFile },
    setup() {
      return { args }
    },
    template:
      '<div style="width: 1130px; height: 690px;  border: 1px solid blue;"><RightSection v-bind="args"/></div>'
  }),
  args: {
    primary: true,
    label: 'Mapeamento',
    backgroundColor: '#FFFFFF',
    vueComponent: StepMappingFile
  }
}
