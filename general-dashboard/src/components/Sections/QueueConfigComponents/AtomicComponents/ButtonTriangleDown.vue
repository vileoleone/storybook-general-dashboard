<template>
  <span
    type="span"
    class="button-top-right-outer-box fl-jcsb-alcnt-fdrow fs12-fw600-clA5 p5 mb0"
    :class="classes"
    :style="style"
  >
    <img class="mr5" :src="SuccessMark" alt="scroll Right" />
    {{ label }}
    <q-btn class="ml30" unelevated padding="5px 0 0 0">
      <img :src="TriangleDownGrayIcon" alt="scroll Right" />

      <q-menu
        square
        flat
        unelevated
        anchor="bottom middle"
        self="top right"
        transition-show="jump-down"
        transition-hide="jump-up"
        class="fs13-fw500-cl6f br5"
        style="max-height: 70px; max-width: 70px"
        @show="toogleBackground"
        @hide="toogleBackground"
      >
        <q-list class="p15">
          <q-item class="htfc mb0" clickable>
            <q-item-section class="htfc mb0 mb10">Editar</q-item-section>
          </q-item>
          <q-item class="htfc mb0" clickable>
            <q-item-section class="htfc mb0">Excluir</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </span>
</template>

<script>
import SuccessMark from '%/icons/SuccessMark.svg'
import TriangleDownGrayIcon from '%/icons/TriangleDownGrayIcon.svg'
export default {
  name: 'ButtonTopTable',

  components: {},

  data() {
    return {
      TriangleDownGrayIcon,
      SuccessMark
    }
  },

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
        [`storybook-button--${this.size || 'medium'}`]: true,
        noLeftBorder: this.step >= 1
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
    },
    nextStep() {
      this.step++
    },
    returnStep() {
      this.step--
    }
  }
}
</script>

<style scoped lang="scss">
.q-item {
  min-height: fit-content;
  padding: 0;
}
</style>
