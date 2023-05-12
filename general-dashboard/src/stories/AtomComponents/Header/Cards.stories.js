import Card from '../../../../src/components/Header/Cards.vue'
import DashboardsLogo from '../../../../src/assets/icons/DashboardsLogo.svg';
import iconPhone from '../../../../src/assets/icons/IconPhone.svg';
import ChatsLogo from '../../../../src/assets/icons/ChatsLogo.svg';
import AgentsLogo from  '../../../../src/assets/icons/AgentsLogo.svg'
import SettingsIcon from  '../../../../src/assets/icons/SettingsIcon.svg'
import UserLogo from  '../../../../src/assets/icons/UserLogo.svg'

export default {
  title: 'Atoms/Headers/Cards',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {control: {actions: 'clicked'}},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const CardsExample = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Example',
    backgroundColor: '#FD9802',
    icon: DashboardsLogo
  },
};

export const DashboardCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    primary: false,
    label: 'Dashboards',
    backgroundColor: '#FD9802',
    icon: DashboardsLogo,
    list: ['Agentes','Filas',{'Atendimentos': ["Acompanhamento","Importação"]}, 'Campanhas', 'Geral']
  },
};

export const CallsCard = {
  render: (args) => ({
    components: {Card},
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    primary: false,
    label: 'Chamadas',
    backgroundColor: '#3D55AE',
    icon: iconPhone, 
    list: ['Agentes','Filas',{'Atendimentos': ["Acompanhamento","Importação"]}, 'Campanhas', 'Geral']
  },
};

export const TalksCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    primary: false,
    label: 'Conversas',
    backgroundColor: '#3D55AE',
    icon: ChatsLogo, 
    list: ['Agentes','Filas',{'Atendimentos': ["Acompanhamento","Importação"]}, 'Campanhas', 'Geral']
  },
};


export const AgentCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    primary: false,
    label: 'Agentes',
    backgroundColor: '#3D55AE',
    icon: AgentsLogo,
    marginBottom: 5, 
    list: ['Agentes','Filas',{'Atendimentos': ["Acompanhamento","Importação"]}, 'Campanhas', 'Geral']
  },
};

export const ConfigCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    primary: false,
    label: 'Configurações',
    backgroundColor: '#3D55AE',
    icon: SettingsIcon,
    marginBottom: 1, 
    list: ['Agentes','Filas',{'Atendimentos': ["Acompanhamento","Importação"]}, 'Campanhas', 'Geral']
  },
};

export const UserCard = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    primary: false,
    label: 'Olá Rodrigo Santos',
    backgroundColor: '#3D55AE',
    icon: UserLogo,
    list: ['LogIn','LogOut'],
    iconRightMargin: 7.5
  },
};
