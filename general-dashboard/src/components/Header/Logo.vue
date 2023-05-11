<template>
  <div type="span" class="logo-paragraph-card" :class="classes" @click="onClick" :style="style">
    <div class="inner-logo" :style="this.innerBackgroundColor">
        <VonixLogo/>
    </div>
  </div>
</template>

<script>
import VonixLogo from '../../assets/icons/VonixLogo.vue';
import '../../assets/scss/dashboardCards.scss'

export default {
  name: 'LogoCard',

  components: { VonixLogo },

  props: {
    label: {
      type: String,
      required: true,
    },
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
