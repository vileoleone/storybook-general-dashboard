import FieldDropzone from '#/Sections/QueueConfigComponents/AtomicComponents/FieldDropzone.vue'
export default {
  title: 'Atom Stories/Dropzones',
  component: FieldDropzone,
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

export const DropzoneStory = {
  render: (args) => ({
    components: { FieldDropzone },
    setup() {
      return { args }
    },
    template: '<FieldDropzone v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'FieldDropzone',
    backgroundColor: '#FFFFFF',
    value: {}
  }
}
