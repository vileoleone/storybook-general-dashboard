import RoutePathSection from "@/components/Sections/QueueConfigComponents/CompositeComponents/RoutePathSection.vue"
export default {
  title: 'Composite Components/Mailing Configuration/Routes Path Section',
  component: RoutePathSection,
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

export const RoutePathSectionStory = {
  render: (args) => ({
    components: { RoutePathSection },
    setup() {
      return { args }
    },
    template: '<RoutePathSection v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'RoutePathSection',
    backgroundColor: '#FFFFFF;',
    routes: ['Dashboards', 'Campanhas', 'Importação']
  }
}
