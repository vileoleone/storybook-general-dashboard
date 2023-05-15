<template>
  <div type="span" class="logo-paragraph-card" :class="classes" @click="onClick" :style="style">
    <div class="inner-logo" :style="this.innerBackgroundColor">
        <VonixLogo/>
    </div>
  </div>
</template>

<script>
import VonixLogo from '../../assets/icons/VonixLogo.vue';

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

<style lang="scss">
  .logo-paragraph-card {
  box-sizing: border-box;
  border-bottom: 1px solid #C5C5C5;
  width: 60px;
  height: 61px; 
  .inner-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 110px 110px 0px;
    border-bottom: 1px solid #FFFFFF;
    background-color:  #FFFFFF;
    width: 60px;
    height: 60px; 
  }
}

</style>