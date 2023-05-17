import LeftSectionSteps from '@/components/Sections/QueueConfigComponents/LeftSectionSteps/LeftSectionSteps.vue'
export default {
  title: 'Atom Stories/Sections',
  component: LeftSectionSteps,
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

export const StepComponentCard = {
  render: (args) => ({
    components: { LeftSectionSteps },
    setup() {
      return { args }
    },
    template: '<LeftSectionSteps v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    step: 0,
    index: 1
  }
}

export const StepComponentMarked = {
  render: (args) => ({
    components: { LeftSectionSteps },
    setup() {
      return { args }
    },
    template: '<LeftSectionSteps v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    step: 0,
    index: 0
  }
}

export const StepComponentConcluded = {
  render: (args) => ({
    components: { LeftSectionSteps },
    setup() {
      return { args }
    },
    template: '<LeftSectionSteps v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
    routerName: 'Other',
    step: 1,
    index: 0,
    subtext: 'Nome da Fila Escolhida'
  }
}
