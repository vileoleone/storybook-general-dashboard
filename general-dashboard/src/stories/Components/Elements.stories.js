import ElementDropzone from '@/components/Sections/QueueConfigComponents/Components/ElementDropzone.vue'
import ElementDraggable from '@/components/Sections/QueueConfigComponents/Components/ElementDraggable.vue'
import ElementSpinnerLoader from '@/components/Sections/QueueConfigComponents/Components/ElementSpinnerLoader.vue'
export default {
  title: 'Components/Elements',
  component: ElementDropzone,
  ElementDraggable,
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

export const DropzoneElementStory = {
  render: (args) => ({
    components: { ElementDropzone },
    setup() {
      return { args }
    },
    template: '<ElementDropzone v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'ElementDropzone',
    backgroundColor: '#FFFFFF',
    value: {}
  }
}

export const DraggableElementStory = {
  render: (args) => ({
    components: { ElementDraggable },
    setup() {
      return { args }
    },
    template: '<ElementDraggable v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'ElementDraggable',
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


export const SpinnerLoadeElementStory = {
  render: (args) => ({
    components: { ElementSpinnerLoader },
    setup() {
      return { args }
    },
    template: '<ElementSpinnerLoader v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'ElementSpinnerLoader',
    backgroundColor: '#FFFFFF'
  }
}