
import FileStep from '@/components/Sections/QueueConfigComponents/RightSectionSteps/FileStep.vue';
export default {
  title: 'Atom Stories/Sections',
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

export const FileStepStory = {
  render: (args) => ({
    components: {FileStep},
    setup() {
      return { args };
    },
    template: '<FileStep v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Arquivo',
    backgroundColor: '#FFFFFF',
    step: 0, 
    index: 1,
    list: ['filafonacao', 'filaatendimento']
  },
};
