import ButtonTopRight from '@/components/Sections/QueueConfigComponents/Components/ButtonTopRight.vue'
import ButtonBottom from '@/components/Sections/QueueConfigComponents/Components/ButtonBottom.vue'
import ButtonTopTable from '@/components/Sections/QueueConfigComponents/Components/ButtonTopTable.vue'
import ButtonTriangleDown from '@/components/Sections/QueueConfigComponents/Components/ButtonTriangleDown.vue'
export default {
  title: 'Components/Buttons',
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
    components: { ButtonTopTable },
    setup() {
      return { args }
    },
    template: ` 
        <div style="border: 1px #CED4DA solid; width: fit-content; padding: 10px;">
          <ButtonTopTable v-bind="args" />
        </div>
    `
  }),
  args: {
    primary: true,
    label: 'Nome da coluna'
  }
}

export const ButtonTriangleDownStory = {
  render: (args) => ({
    components: { ButtonTriangleDown },
    setup() {
      return { args }
    },
    template: ` 
        <div style="border: 1px #CED4DA solid; width: fit-content; padding: 10px;">
          <ButtonTriangleDown v-bind="args" />
        </div>
    `
  }),
  args: {
    primary: true,
    label: 'Ir para a próxima Etapa'
  }
}
