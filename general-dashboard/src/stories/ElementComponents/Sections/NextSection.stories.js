 import NextSection from '@/components/Sections/NextSection.vue'
export default {
  title: 'Elements/Sections/NextSection',
  component: NextSection,
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

export const NextSectionCard = {
  render: (args) => ({
    components: { NextSection },
    setup() {
      return { args };
    },
    template: '<NextSection v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'NextSection',
    backgroundColor: '#FFFFFF;',
    routes: ['Dashboards', 'Campanhas', 'Importação']
  },
}; 
