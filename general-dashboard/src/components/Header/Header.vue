<template>
  <span type="span" class="header" :class="classes" @click="onClick" :style="style">
    <span class="left-section">
      <Logo label ='Logo' backgroundColor = '#FD9802'/>
      <Cards label= 'Dashboards' backgroundColor= '#FD9802' :icon ="DashboardsLogo"/>
      <Cards label= 'Chamadas' backgroundColor= '#3D55AE' :icon ="iconPhone"/>
      <Cards label= 'Conversas' backgroundColor= '#3D55AE' :icon ="ChatsLogo"/>
      <Cards label= 'Agentes' backgroundColor= '#3D55AE' :icon ="AgentsLogo"/>
      <Cards label= 'Configurações' backgroundColor= '#3D55AE' :icon ="SettingsIcon"/>
    </span>
    <span class="right-section">
      <img class="api" :src="ApiButton" :alt="ApiButton"/>
      <img class="changeLog" :src="ChangeLogButton"/>
      <Cards label= 'Olá Rodrigo Santos' backgroundColor= '#3D55AE' :icon ="UserLogo"/>
    </span>

  </span>
</template>

<script>
import '../../assets/scss/Header.scss'
import Logo from './Logo.vue'
import Cards from './Cards.vue';
import DashboardsLogo from '../../assets/icons/DashboardsLogo.svg'
import iconPhone from '../../assets/icons/iconPhone.svg'
import ChatsLogo from '../../assets/icons/ChatsLogo.svg'
import AgentsLogo from  '../../assets/icons/AgentsLogo.svg'
import SettingsIcon from  '../../assets/icons/SettingsIcon.svg'
import UserLogo from  '../../assets/icons/UserLogo.svg' 
import ApiButton from '../../assets/icons/ApiButton.svg'
import ChangeLogButton from '../../assets/icons/ChangeLogButton.svg';

export default {
  name: 'HeaderLayout',

  components: {Logo, Cards},

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
    }
  },

  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
