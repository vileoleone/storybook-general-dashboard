import StepSectionComponent from '../../../../src/components/Sections/stepsSectionComponent.vue'
export default {
  title: 'Elements/Sections/StepSection/StepSectionComponent',
  component:StepSectionComponent,
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

export const StepComponentCard = {
  render: (args) => ({
    components: {StepSectionComponent },
    setup() {
      return { args };
    },
    template: '<StepSectionComponent v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    step: 0, 
    index: 1
  },
};

export const StepComponentMarked = {
  render: (args) => ({
    components: {StepSectionComponent },
    setup() {
      return { args };
    },
    template: '<StepSectionComponent v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    step: 0, 
    index: 0
  },
};

export const StepComponentConcluded = {
  render: (args) => ({
    components: {StepSectionComponent },
    setup() {
      return { args };
    },
    template: '<StepSectionComponent v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    routerName: 'Other',
    step: 1, 
    index: 0,
    subtext: 'Nome da Fila Escolhida'
  },
};
