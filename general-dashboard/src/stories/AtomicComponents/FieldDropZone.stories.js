import FieldDropzone from '#/Sections/QueueConfigComponents/AtomicComponents/FieldDropzone.vue'
import FieldDraggable from '@/components/Sections/QueueConfigComponents/AtomicComponents/FieldDraggable.vue'
export default {
  title: 'Atom Stories/Fields',
  component: FieldDropzone,
  FieldDraggable,
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

export const DropzoneFieldStory = {
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

export const FieldDraggableStory = {
  render: (args) => ({
    components: { FieldDraggable },
    setup() {
      return { args }
    },
    template: '<FieldDraggable v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'FieldDraggable',
    backgroundColor: '#FFFFFF',
    list: [
      { fieldName: 'UF', fieldtype: 'texto' },
      { fieldName: 'Cidade', fieldtype: 'texto' },
      { fieldName: 'Email', fieldtype: 'Email' },
      { fieldName: 'Data', fieldtype: 'Data' },
      { fieldName: 'Timestamp', fieldtype: 'Timestamp' },
      { fieldName: 'Data e HORA', fieldtype: 'Data e HORA' },
      { fieldName: 'URL', fieldtype: 'URL' },
      { fieldName: 'Verdadeiro/Falso', fieldtype: 'Verdadeiro/Falso' }
    ]
  }
}
