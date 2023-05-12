import StepSectionComponent from '../../../../src/components/Sections/stepsSectionComponent.vue'
export default {
  title: 'Elements/Sections/StepSection',
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
    routerName: 'other',
    concluded: false,
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
    routerName: 'Fila',
    concluded: false,
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
    concluded: true,
  },
};
