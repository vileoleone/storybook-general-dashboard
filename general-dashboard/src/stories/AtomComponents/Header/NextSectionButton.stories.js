import NextSectionButton from '../../../../src/components/Sections/NextSectionButton.vue'
export default {
  title: 'Atoms/Sections/NextSection',
  component: NextSectionButton,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="height: 93px; border: 1px #CED4DA solid; display: flex; align-items:center;justify-content: flex-end; padding-right: 31px;>"><story /></div>',
    }),
  ],
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

export const NextSectionButtonAtom = {
  render: (args) => ({
    components: { NextSectionButton},
    setup() {
      return { args };
    },
    template: '<NextSectionButton v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Próximo',
    backgroundColor: '#FFFFFF',
  },
};
