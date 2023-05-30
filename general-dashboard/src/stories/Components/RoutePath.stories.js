import RoutePath from "@/components/Sections/QueueConfigComponents/Components/RoutePath.vue"
export default {
  title: 'Components/RoutePath',
  component: RoutePath,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { story },
      template:
        '<div style="height: 93px; border: 1px #CED4DA solid; display: flex; align-items:center;"><story /></div>'
    })
  ],
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

export const RoutePathStory = {
  render: (args) => ({
    components: { RoutePath },
    setup() {
      return { args }
    },
    template: '<RoutePath v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Importação de contatos',
    backgroundColor: '#FFFFFF',
    list: ['Dashboards', 'Campanhas', 'Importação']
  }
}
