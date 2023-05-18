<template>
  <div type="span" class="logo-outer-box" :class="classes" @click="onClick" :style="style">
    <div class="inner-logo-box">
      <VonixLogo />
    </div>
  </div>
</template>

<script>
import VonixLogo from '%/icons/VonixLogo.vue'

export default {
  name: 'LogoCard',

  components: { VonixLogo },

  props: {
    label: {
      type: String,
      required: true
    },
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
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">

.logo-outer-box.active {
  background-color: #fd9802;
  
}
.logo-outer-box {
  box-sizing: border-box;
  border-bottom: 1px solid #c5c5c5;
  width: 60px;
  height: 60px;
  background-color: #3d55ae;

  .inner-logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 110px 110px 0px;
    border-bottom: 1px solid #ffffff;
    background-color: #ffffff;
    width: 60px;
    height: 60px;
  }

}
</style>
