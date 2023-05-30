<template>
  <div
    type="span"
    class="Card-Datatype-outer-box fl-jcst-alcnt-fdrow p10px  "
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <img class="mr10px" :src="DragIcon" alt="Drag Icon" />
    <div class="fl-jcst-alst-fdcolumn htfc p0 ">
      <span class="fs13-fw600-cl8F fl-jcsb-alst-fdcolumn lh0 ">{{ datatypeName }}</span>
      <span class="fs11-fw400-cl8F lh0">{{ datatypeItem }}</span>
    </div>
  </div>
</template>

<script>
import DragIcon from '%/icons/DragIcon.svg'
export default {
  name: 'componentName',

  components: {},

  data() {
    return {
      DragIcon
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
    },
    datatypeName: {
      type: String
    },
    datatypeItem: {
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
div {
  display: flex;
  box-sizing: border-box;
}
</style>
