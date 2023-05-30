<template>
  <span
    type="span"
    class="fl-jcsb-alst-fdrow bcblue wd100 fixed-top-left-0 max-height-60px borderBottomC5"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <span class="fl-jcsb-alst-fdrow mr20px">
      <Card
        label="Dashboards"
        :icon="DashboardsLogo"
        :list="dashboardList"
        :menuList="MenuList"
        width="160"
        :leftLogo="Logo"
      />
      <Card
        label="Chamadas"
        :icon="iconPhone"
        :list="ChamadasList"
        :menuList="MenuListCalls"
        width="175"
      />
      <Card
        label="Conversas"
        :icon="ChatsLogo"
        :list="ConversasList"
        :menuList="MenuList"
        width="160"
      />
      <Card
        label="Agentes"
        :icon="AgentsLogo"
        :list="AgentesList"
        :menuList="MenuList"
        width="160"
      />
      <Card
        label="Configurações"
        :icon="SettingsIcon"
        :list="ConfiguraçõesList"
        :menuList="MenuList"
        width="175"
      />
    </span>
    <span class="fl-jcsb-alcnt-fdrow min-width-330px min-height-60px pl15px">
      <img class="cursor-pointer als-c" :src="ApiButton" alt="ApiButton" />
      <img class="cursor-pointer als-c" :src="ChangeLogButton" alt="ChangeLogButton" />
      <Card
        label="Olá Rodrigo Santos"
        :icon="UserLogo"
        :list="userList"
        :menuList="MenuList"
        width="190"
      />
    </span>
  </span>
</template>

<script>
import MenuListCalls from './MenuListCalls.vue'
import Card from './Cards.vue'
import DashboardsLogo from '%/icons/DashboardsLogo.svg'
import iconPhone from '%/icons/IconPhone.svg'
import ChatsLogo from '%/icons/ChatsLogo.svg'
import AgentsLogo from '%/icons/AgentsLogo.svg'
import SettingsIcon from '%/icons/SettingsIcon.svg'
import UserLogo from '%/icons/UserLogo.svg'
import ApiButton from '%/icons/ApiButton.svg'
import ChangeLogButton from '%/icons/ChangeLogButton.svg'
import MenuList from './MenuList.vue'
import Logo from './Logo.vue'
export default {
  name: 'HeaderLayout',

  components: { Card },

  data() {
    return {
      MenuList,
      MenuListCalls,
      Logo,
      DashboardsLogo,
      iconPhone,
      ChatsLogo,
      AgentsLogo,
      SettingsIcon,
      UserLogo,
      ApiButton,
      ChangeLogButton,
      dashboardList: [
        'Agentes',
        'Filas',
        { Atendimentos: ['Acompanhamento', 'Importação'] },
        'Campanhas',
        'Geral'
      ],
      ChamadasList: [
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
      ConversasList: ['Chat', 'Email', 'Mensagens de Email'],
      AgentesList: [
        'Visão Geral',
        'Ranking',
        'Pausas',
        'Frequência',
        'Frequência/Dia',
        'Sessões',
        'Detalhado',
        'Ociosidade'
      ],
      ConfiguraçõesList: [
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
      userList: ['sair']
    }
  },

  props: {
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },

  methods: {}
}
</script>

<style scoped lang="scss"></style>
