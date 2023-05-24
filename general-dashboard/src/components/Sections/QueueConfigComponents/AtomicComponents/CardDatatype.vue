<template>
  <div type="span" class="Card-Datatype-outer-box wd100 borderBottomC5" :class="classes" @click="onClick" :style="style">
    <div class="datatype-card fl-jcst-alcnt-fdrow wd100  p10">
      <img class="mr10" :src="DragIcon" alt="Drag Icon" />
      <div class="fl-jcsb-alst-fdcolumn ">
        <span class="fs13-fw600-cl8F">{{ datatypeName }}</span>
        <span class="fs11-fw400-cl8F">{{ datatypeItem }}</span>
      </div>
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

<style scoped lang="scss"></style>
