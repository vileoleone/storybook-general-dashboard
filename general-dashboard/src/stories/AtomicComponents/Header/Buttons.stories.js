import ButtonTopRight from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonTopRight.vue'
import ButtonBottom from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonBottom.vue'

export default {
  title: 'Atom Stories/Sections/Buttons',
  component: ButtonTopRight, ButtonBottom,
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

export const ButtonTopRightStory = {
  render: (args) => ({
    components: { ButtonTopRight},
    setup() {
      return { args };
    },
    template: '<ButtonTopRight v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Próximo',
    step : 0
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
