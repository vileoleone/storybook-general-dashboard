import NextSectionButton from '@/components/Sections/NextSectionButton.vue'
import ButtonBottom from '@/components/Sections/ButtonBottom.vue'

export default {
  title: 'Atoms/Sections/NextSection',
  component: NextSectionButton, ButtonBottom,
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

export const NextSectionButtonStory = {
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

export const ButtonBottomStory = {
  render: (args) => ({
    components: { ButtonBottom },
    setup() {
      return { args }
    },
    template: '<ButtonBottom v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Ir para a próxima Etapa',
    isReady: true
  }
}
