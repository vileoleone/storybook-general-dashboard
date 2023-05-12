import StepSection from '../../../../src/components/Sections/StepSection.vue'
export default {
  title: 'Elements/Sections/StepSection',
  component:StepSection,
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

export const StepSectionCard = {
  render: (args) => ({
    components: {StepSection },
    setup() {
      return { args };
    },
    template: '<StepSection v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Etapas de Importação',
    backgroundColor: '#FFFFFF',
  },
};
