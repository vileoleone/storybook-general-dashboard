<template>
  <button type="button" class="next-section-button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import '../../assets/scss/NextSection.scss'
import ChevronRight from '../../../src/assets/icons/ChevronRight.svg'

export default {
  name: 'MenuLayout',

  components: {},

  data() {
    return {
      ChevronRight
    }
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
