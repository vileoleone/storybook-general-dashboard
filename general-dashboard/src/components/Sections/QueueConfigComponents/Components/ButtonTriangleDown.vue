<template>
  <span
    type="span"
    class="fl-jcsb-alcnt-fdrow fs12-fw600-clA5 p5px mb0"
    :class="classes"
    :style="style"
  >
    <img class="mr5px" :src="SuccessMark" alt="scroll Right" />
    {{ label }}
    <q-btn class="ml30px" unelevated padding="5px 0 0 0">
      <img :src="TriangleDownIcon" alt="scroll Right" v-show="!this.active" />
      <img :src="TriangleDownGrayIcon" alt="scroll Right" v-show="this.active" />
      <q-menu
        square
        flat
        unelevated
        anchor="bottom middle"
        self="top right"
        transition-show="jump-down"
        transition-hide="jump-up"
        class="fs13-fw500-cl6f br5px wd75px"
        style="max-height: 70px; max-width: 70px"
        @before-show="this.active = !this.active"
        @before-hide="this.active = !this.active"
      >
        <q-list class="p10px">
          <q-item class="htfc mb0" clickable>
            <q-item-section class="htfc mb0 mb10px">Editar</q-item-section>
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
import TriangleDownIcon from '%/icons/TriangleDownIcon.svg'
import TriangleDownGrayIcon from '%/icons/TriangleDownGrayIcon.svg'
export default {
  name: 'ButtonTopTable',

  components: {},

  data() {
    return {
      TriangleDownGrayIcon,
      TriangleDownIcon,
      SuccessMark,
      active: false
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
        bcgray: this.active
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
