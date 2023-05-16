<template>
  <div type="span" class="next-section" :class="classes" @click="onClick" :style="style">
    <NextSectionTitle label="Importação de Contatos" :list="routes" />
    <NextSectionButton label="Próximo" />
  </div>
</template>

<script>
import NextSectionButton from './NextSectionButton.vue'
import NextSectionTitle from './NextSectionTitle.vue'
export default {
  name: 'NextSection',

  components: { NextSectionButton, NextSectionTitle },

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
    routes: {
      type: Array
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
.next-section {
  box-sizing: border-box;
  height: 93px;
  border-bottom: 1px #ced4da solid;
  /*     border-top: none; */
  /*    border-left: none; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  width: 100%;
  margin-top: 60px;
}
</style>
