import Card from '@/components/Header/Cards.vue'
import DashboardsLogo from '%/icons/DashboardsLogo.svg'
import iconPhone from '%/icons/IconPhone.svg'
import ChatsLogo from '%/icons/ChatsLogo.svg'
import AgentsLogo from '%/icons/AgentsLogo.svg'
import SettingsIcon from '%/icons/SettingsIcon.svg'
import UserLogo from '%/icons/UserLogo.svg'
import CardDatatype from '@/components/Sections/QueueConfigComponents/Components/CardDatatype.vue'
import MenuList from '@/components/Header/MenuList.vue'
import MenuListCalls from '@/components/Header/MenuListCalls.vue'
import Logo from '@/components/Header/Logo.vue'
export default {
  title: 'Components/Cards',
  component: Card,
  CardDatatype,

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
    icon: DashboardsLogo,
    width: '160',
    list: [
      'Agentes',
      'Filas',
      { Atendimentos: ['Acompanhamento', 'Importação'] },
      'Campanhas',
      'Geral'
    ],
    menuList: MenuList
  }
}

export const DashboardCardStory = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
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
    ],
    width: '160',
    menuList: MenuList,
    leftLogo: Logo
  }
}

export const CardCallsStory = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    primary: false,
    label: 'Chamadas',
    icon: iconPhone,
    list: [
      'Todas as chamadas',
      'Abandono',
      'Tipo',
      'Número',
      'Localidade',
      'Operadora',
      'Tronco',
      'Horário',
      'Duração',
      'Filas',
      'Desempenho',
      'Atendimentos por horário'
    ],
    width: '175',
    menuList: MenuListCalls
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
    list: ['Chat', 'Email', 'Mensagens de Email'],
    width: '160',
    menuList: MenuList
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
      'Visão Geral',
      'Ranking',
      'Pausas',
      'Frequência',
      'Frequência/Dia',
      'Sessões',
      'Detalhado',
      'Ociosidade'
    ],
    width: '160',
    menuList: MenuList
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
      'Filas',
      'Filas de Fonação',
      'Agentes',
      'Ramais',
      'Uras',
      'Cadastro de audios',
      'Número de Entrada',
      'Rotas de saída',
      'Ramais administrativos',
      'Perfiladores',
      'Motivos de pausas',
      'Brokers de atendimento',
      'Tokens',
      'Respostas rápidas',
      'Planos e tarifas',
      'Usuários'
    ],
    width: '175',
    menuList: MenuList
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
    list: ['sair'],
    width: '190',
    menuList: MenuList
  }
}

export const CardDatatypeStory = {
  render: (args) => ({
    components: { CardDatatype },
    setup() {
      return { args }
    },
    template:
      '<div style=" width: 250px; border: 1px #CED4DA solid; display: flex; align-items:center;"><CardDatatype v-bind="args" /></div>'
  }),
  args: {
    primary: true,
    label: 'Example',
    datatypeName: 'Data',
    datatypeItem: 'DateTime'
  }
}
