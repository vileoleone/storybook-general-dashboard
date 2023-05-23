import ButtonTopRight from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonTopRight.vue'
import ButtonBottom from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonBottom.vue'
import ButtomTopTable from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonTopTable.vue'


export default {
  title: 'Atom Stories/Buttons',
  component: ButtonTopRight,
  ButtonBottom,
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

export const ButtonTopRightStory = {
  render: (args) => ({
    components: { ButtonTopRight },
    setup() {
      return { args }
    },

    template: `<div 
        style="
        height: 93px;
        border: 1px #CED4DA solid;
        display: flex;
        align-items:center;
        justify-content:flex-end;
        padding-right: 31px;">
        <ButtonTopRight v-bind="args"/>
        </div>`
  }),
  args: {
    primary: true,
    label: 'Próximo',
    step: 0
  }
}

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
    label: 'Ir para a próxima Etapa'
  }
}

export const ButtonTopTableStory = {
  render: (args) => ({
    components: { ButtomTopTable },
    setup() {
      return { args }
    },
    template: ` 
        <div style="border: 1px #CED4DA solid; width: fit-content; padding: 10px;">
          <ButtomTopTable v-bind="args" />
        </div>
    `
  }),
  args: {
    primary: true,
    label: 'Ir para a próxima Etapa'
  }
}
