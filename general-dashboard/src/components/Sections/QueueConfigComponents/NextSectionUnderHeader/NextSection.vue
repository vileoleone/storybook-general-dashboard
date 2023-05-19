<template>
  <div
    type="span"
    class="next-section-outer-box"
    :class="classes"
    @click="onClick"
    :style="styles"
  >
    <NextSectionTitle label="Importação de Contatos" :list="routes" />
    <ButtonTopRight label="Próximo" />
  </div>
</template>

<script>
import ButtonTopRight from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonTopRight.vue'
import NextSectionTitle from '#/Sections/QueueConfigComponents/NextSectionUnderHeader/NextSectionTitle.vue'

export default {
  name: 'NextSection',

  components: { ButtonTopRight, NextSectionTitle },

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
    },

  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.next-section-outer-box {
  align-items: center;
  border-bottom: 1px #ced4da solid;
  box-sizing: border-box;
  display: flex;
  height: 93px;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  width: 100%;
}
</style>
