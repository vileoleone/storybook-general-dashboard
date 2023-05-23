<template>
  <div type="span" class="main-outer-box" :class="classes" @click="onClick" :style="style">
    <span class="mailing-main-header">{{ label }}</span>
    <div class="step-container">
      <component :list="queues" :is="vueComponent" />
    </div>
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

<style scoped lang="scss">
.mailing-main-header {
  border-bottom: 1px solid #CED4DA;
  color: #444444;
  font-family: 'Work Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  height: 40px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}

.main-outer-box {
  align-items: flex-start;
  background-color: #444444;
  background: #fafafa;
  border-right: none;
  border-top: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
  padding: 30px 0 0 5%;
  width: 100%;
}

.step-container {
  margin-right: 20px;
  width: 100%;
}
</style>
