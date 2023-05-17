import CardsExample from '#/Header/CardsExample.vue'
import DashboardsLogo from '%/icons/DashboardsLogo.svg'

export default {
  title: 'Atom Stories/Headers',
  component: CardsExample,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
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

export const CardExampleStory = {
  render: (args) => ({
    components: { CardsExample },
    setup() {
      return { args }
    },
    template: '<CardsExample v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Example',
    icon: DashboardsLogo,
    list: [
      'Agentes',
      'Filas',
      { Atendimentos: ['Acompanhamento', 'Importação'] },
      'Campanhas',
      'Geral'
    ]
  }
}
