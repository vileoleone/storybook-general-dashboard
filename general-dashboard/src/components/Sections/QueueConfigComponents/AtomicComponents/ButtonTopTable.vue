<template>
  <span type="span" class="button-top-right-outer-box" :class="classes" :style="style">
    <div class="button-pagination-left-right">
      <div class="button">
        <img :src="ChevronLeftIcon" alt="scroll left" />
      </div>
      <span class="als-c mr10 ml10 fs12-fw500-cl61">2 - 3</span>
      <div class="button">
        <img :src="ChevronRightIcon" alt="scroll Right" />
      </div>
    </div>
  </span>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
export default {
  name: 'ButtonTopTable',

  components: {},

  data() {
    return {
      ChevronLeftIcon,
      ChevronRightIcon
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
.button-pagination-left-right {
  display: flex;
  flex-direction: row;
  min-width: 55px;
  justify-content: space-between;

  .button {
    height: 24px;
    width: 24px;
    border-radius: 3px;
    border: 1px solid #c5c5c5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
