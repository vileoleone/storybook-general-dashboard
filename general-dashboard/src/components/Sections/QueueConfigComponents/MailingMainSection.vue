<template>
  <div
    type="span"
    class="main-outer-box fl-jcst-alst-fdcolumn bcwhite pt30 pl30 pr20 wd100"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <span class="mailing-main-header wd100 mb20 fs20-fw700-cl44 borderBottomCE pb15">{{ label }}</span>
    <component :list="queues" :is="vueComponent" />
  </div>
</template>

<script>
export default {
  name: 'MailingMainSection',

  components: {},

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
    },
    queues: {
      type: Array
    },
    vueComponent: {}
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

<style scoped lang="scss"></style>
