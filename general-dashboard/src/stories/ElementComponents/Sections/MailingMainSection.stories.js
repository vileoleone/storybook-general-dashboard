import MailingMainSection from '../../../../src/components/Sections/MailingMainSection.vue'
export default {
  title: 'Elements/Sections/MailingMainSection',
  component: MailingMainSection,
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

export const MailingMainSectionCard = {
  render: (args) => ({
    components: { MailingMainSection },
    setup() {
      return { args };
    },
    template: '<MailingMainSection v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
  },
}; 
