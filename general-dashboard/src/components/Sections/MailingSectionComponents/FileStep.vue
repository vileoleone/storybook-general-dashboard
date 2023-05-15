<template>
  <div type="span" class="file-option-box" :class="classes"  :style="style">
    <div class="csv-box">
    </div>
    <div class="list-all-queues">
      <span class="header"></span>
    <div class="outer-list-queue"></div>
    </div>
  </div>
</template>

<script>
import TriangleDown from '../../../../src/assets/icons/TriangleDown.svg'
import TriangleUp from '../../../../src/assets/icons/TriangleUp.svg'
export default {
  name: 'MenuLayout',

  components: {},

  data() {
    return {
      TriangleDown,
      TriangleUp,
      active: false
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
      this.active = !this.active
    },
  },
};
</script>

<style lang="scss">
 
.file-option-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.outer-list-queue {
  display: flex;
  flex-direction: column;
}
</style>
