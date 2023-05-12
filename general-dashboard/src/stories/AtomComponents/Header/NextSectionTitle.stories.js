import NextSectionTitle from '../../../../src/components/Sections/NextSectionTitle.vue'
export default {
  title: 'Atoms/Sections/NextSection',
  component: NextSectionTitle,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="height: 93px; border: 1px #CED4DA solid; display: flex; align-items:center;"><story /></div>',
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

export const NextSectionTitleCard = {
  render: (args) => ({
    components: { NextSectionTitle },
    setup() {
      return { args };
    },
    template: '<NextSectionTitle v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Importação de contatos',
    backgroundColor: '#FFFFFF',
    list: ['Dashboards', 'Campanhas', 'Importação']
  },
};
