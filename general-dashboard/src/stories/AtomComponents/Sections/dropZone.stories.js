import DropZone from '@/components/Sections/MailingSectionComponents/DropZone.vue'
export default {
  title: 'Atoms/Sections/MailingMainSection/DropZone',
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

export const DropzoneComponent= {
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
