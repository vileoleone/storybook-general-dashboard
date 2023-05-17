import DropZone from "@/components/Sections/QueueConfigComponents/AtomicComponents/DropZone.vue"
export default {
  title: 'Atom Stories/Sections',
  component: DropZone,
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

export const DropzoneStory= {
  render: (args) => ({
    components: { DropZone },
    setup() {
      return { args }
    },
    template: '<DropZone v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'DropZone',
    backgroundColor: '#FFFFFF',
    value: {}
  }
}
