<template>
  <span type="span" class="header-outer-box" :class="classes" @click="onClick" :style="style">
    <span class="left-section-cards">
      <CardDashboard label="Dashboards" :icon="DashboardsLogo" :list="dashboardList" />
      <CardCalls label="Chamadas" :icon="iconPhone" :list="ChamadasList" />
      <Cards label="Conversas" :icon="ChatsLogo" :list="ConversasList" />
      <Cards label="Agentes" :icon="AgentsLogo" :list="AgentesList" />
      <CardConfig label="Configurações" :icon="SettingsIcon" :list="ConfiguraçõesList" />
    </span>
    <span class="right-section-cards">
      <img class="api-button-icon" :src="ApiButton" alt="ApiButton" />
      <img class="changeLog-button-icon" :src="ChangeLogButton" />
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

  methods: {
  }
}
</script>

<style scoped lang="scss">
.api-button-icon {
  align-self: center;
  cursor: pointer;
  height: 11px;
  width: 20px;
}
.changeLog-button-icon {
  align-self: center;
  cursor: pointer;
  height: 18px;
  width: 18px;
}
.header-outer-box {
  background-color: #3d55ae;
  display: flex;
  height: 59px;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
}
.left-button {
  display: flex;
}
.left-button.active {
  display: flex;
   background-color: #FD9802;
}

.left-section-cards {
  display: flex;
  flex-direction: row;
  max-height: 60px;
}
.right-section-cards {
  display: flex;
  flex-direction: row;
  img {
    margin-right: 43px;
  }
}

</style>
