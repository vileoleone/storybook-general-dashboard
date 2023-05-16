
<template>
  <button
    type="button"
    class="button-bottom"
    :class="classes"
    @click="onClick"
    :style="style"
    v-if="isReady"
  >
    {{ label }}
    <img :src="ArrowRightIcon" alt=" Arrow right">
  </button>

</template>

<script>
import ChevronRight from '@/assets/icons/ChevronRight.svg'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon.svg'
export default {
  name: 'buttonBottom',

  components: {},

  data() {
    return {
      ChevronRight, 
      ArrowRightIcon
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
    isReady: {
      type: Boolean
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
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
.button-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  width: 100%;
  height: 55px;

  background: #4B68D2;
  border: 2px solid #4B68D2;
  border-radius: 5px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;

  color:#FFFFFF;

  img {
    margin-left: 7px;
  }

}
</style>
