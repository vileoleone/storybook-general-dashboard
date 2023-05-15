import MailingMainSectionComponent from '../../../../src/components/Sections/MailingMainSection.vue'
import FileStep from  '../../../../src/components/Sections/MailingSectionComponents/FileStep.vue' 
export default {
  title: 'Elements/Sections/MailingMainSection/FileStep',
  component:FileStep,MailingMainSectionComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    innerBackgroundColor: {
      control: 'color',
    },
    onClick: {control: {actions: 'clicked'}},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const FileStepComponentCard = {
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
