<template>
  <span
    type="span"
    class="fl-jcsb-alst-fdrow bcblue wd100 fixed-top-left-0 max-height-60px mr5 borderBottomC5"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <span class="fl-jcsb-alst-fdrow mr40px">
      <CardDashboard label="Dashboards" :icon="DashboardsLogo" :list="dashboardList" />
      <CardCalls label="Chamadas" :icon="iconPhone" :list="ChamadasList" />
      <Cards label="Conversas" :icon="ChatsLogo" :list="ConversasList" />
      <Cards label="Agentes" :icon="AgentsLogo" :list="AgentesList" />
      <CardConfig label="Configurações" :icon="SettingsIcon" :list="ConfiguraçõesList" />
    </span>
    <span class="fl-jcsb-alcnt-fdrow min-width-330px min-height-60px">
      <img class="cursor-pointer als-c" :src="ApiButton" alt="ApiButton" />
      <img class="cursor-pointer als-c" :src="ChangeLogButton" alt="ChangeLogButton" />
      <CardUser label="Olá Rodrigo Santos" :icon="UserLogo" />
    </span>
  </span>
</template>

<script>
import Cards from './Cards.vue'
import CardDashboard from './CardDashboard.vue'
import DashboardsLogo from '%/icons/DashboardsLogo.svg'
import iconPhone from '%/icons/IconPhone.svg'
import ChatsLogo from '%/icons/ChatsLogo.svg'
import AgentsLogo from '%/icons/AgentsLogo.svg'
import SettingsIcon from '%/icons/SettingsIcon.svg'
import UserLogo from '%/icons/UserLogo.svg'
import ApiButton from '%/icons/ApiButton.svg'
import ChangeLogButton from '%/icons/ChangeLogButton.svg'
import CardCalls from './CardCalls.vue'
import CardUser from './CardUser.vue'
import CardConfig from './CardConfig.vue'
export default {
  name: 'HeaderLayout',

  components: { Cards, CardUser, CardCalls, CardDashboard, CardConfig },

  data() {
    return {
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
      ]
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
