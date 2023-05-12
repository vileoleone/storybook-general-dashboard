<template>
  <li :class="classes" :style="style" @click="onClick">
    {{ label }}
  </li>
</template>

<script>
import '../../assets/scss/MenuList.scss'

export default {
  name: 'MenuLayout',

  components: {},

  data() {
    return {
      isActive: false
    }
  },

  props: {
    label: {
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
    list: {
      type: Array
    },
    marginBottom: {
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
        active: this.isActive
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        marginBottom: this.marginBottom + 'px'
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
      this.isActive = !this.isActive
    }
  }
}
</script>
