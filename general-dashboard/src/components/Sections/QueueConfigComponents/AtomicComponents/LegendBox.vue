<template>
  <div type="span" class="legend-outer-box" :class="classes" @click="onClick" :style="style">
    <div class="legend-block fl-jcst-alcnt-fdrow mr15">
      <div class="color wd10 ht10 mr10" :class="boxColor"></div>
      <div class="legend fs12-fw400-cl8B">{{ label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegendBox',

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
    boxColor: {
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

<style scoped lang="scss"></style>
