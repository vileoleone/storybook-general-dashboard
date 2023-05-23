import Card from '@/components/Header/Cards.vue'
import DashboardCard from '#/Header/CardDashboard.vue'
import CardCalls from '#/Header/CardCalls.vue'
import DashboardsLogo from '%/icons/DashboardsLogo.svg'
import iconPhone from '%/icons/IconPhone.svg'
import ChatsLogo from '%/icons/ChatsLogo.svg'
import AgentsLogo from '%/icons/AgentsLogo.svg'
import SettingsIcon from '%/icons/SettingsIcon.svg'
import UserLogo from '%/icons/UserLogo.svg'

export default {
  title: 'Atom Stories/Cards',
  component: Card,
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

export const CardStory = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Example',
    icon: DashboardsLogo
  }
}

export const DashboardCardStory = {
  render: (args) => ({
    components: { DashboardCard },
    setup() {
      return { args }
    },
    template: '<DashboardCard v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Dashboards',
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

export const CardCallsStory = {
  render: (args) => ({
    components: { CardCalls },
    setup() {
      return { args }
    },
    template: '<CardCalls v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Chamadas',
    icon: iconPhone,
    list: [
      'Agentes',
      'Filas',
      { Atendimentos: ['Acompanhamento', 'Importação'] },
      'Campanhas',
      'Geral'
    ]
  }
}

export const TalksCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Conversas',
    icon: ChatsLogo,
    list: [
      'Agentes',
      'Filas',
      { Atendimentos: ['Acompanhamento', 'Importação'] },
      'Campanhas',
      'Geral'
    ]
  }
}

export const AgentCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Agentes',
    icon: AgentsLogo,
    list: [
      'Agentes',
      'Filas',
      { Atendimentos: ['Acompanhamento', 'Importação'] },
      'Campanhas',
      'Geral'
    ]
  }
}

export const ConfigCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Configurações',
    icon: SettingsIcon,
    list: [
      'Agentes',
      'Filas',
      { Atendimentos: ['Acompanhamento', 'Importação'] },
      'Campanhas',
      'Geral'
    ]
  }
}

export const UserCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Olá Rodrigo Santos',
    icon: UserLogo,
    list: ['LogIn', 'LogOut']
  }
}
