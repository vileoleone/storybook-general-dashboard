import MailingMainSectionComponent from '../../../../src/components/Sections/MailingMainSection.vue'
import QueueStep from  '../../../../src/components/Sections/MailingSectionComponents/QueueStep.vue' 
export default {
  title: 'Elements/Sections/MailingMainSection/QueueStep',
  component:QueueStep,MailingMainSectionComponent,
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

export const QueueStepComponentCard = {
  render: (args) => ({
    components: {QueueStep},
    setup() {
      return { args };
    },
    template: '<QueueStep v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    step: 0, 
    index: 1,
    list: ['filafonacao', 'filaatendimento']
  },
};
