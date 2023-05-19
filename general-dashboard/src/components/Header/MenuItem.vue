<template>
  <q-item
    id="li"
    type="li"
    :class="classes"
    :style="style"
    @mouseover="onMouse"
    @mouseleave="onMouse"
  >
    {{ label }}
  </q-item>
</template>

<script>
export default {
  name: 'MenuItemLayout',

  components: {},

  data() {
    return {
      isActive: false,
      clicked: false
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
    onMouse() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
.q-item {
    padding: 0;
    min-height: fit-content;
  }
 #li {
  margin-bottom: 10px;
 } 
</style>
