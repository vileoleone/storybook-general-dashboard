<template>
  <span type="span" class="button-top-right-outer-box" :class="classes" :style="style">
    <button
      v-if="this.step >= 1"
      type="button"
      class="button-top-right-return"
      :class="classes"
      @click="returnStep"
      :style="style"
    >
      Voltar
    </button>
    <button
      type="button"
      class="button-top-right"
      @click="nextStep"
      :class="classes"
      :style="style"
    >
      {{ label }}
    </button>
  </span>
</template>

<script>
import ChevronRight from '%/icons/ChevronRight.svg'
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/store'
export default {
  name: 'ButtonTopRight',

  components: {},

  data() {
    return {
      ChevronRight,
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
    }, 
  
    ...mapWritableState(useMailingStore, {
      step: 'globalStep',
      }),
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
.button-top-right {
  align-items: center;
  background-color: #e7edff;
  border-radius: 5px;
  border: 1px solid #c5c5c5;
  box-sizing: border-box;
  color: #3d55ae;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  height: 39px;
  justify-content: center;
  width: 87px;
}

.button-top-right.noLeftBorder {
  border-radius: 0 5px 5px 0;
  border: 1px solid #c5c5c5;
  border-left: none;
}
.button-top-right-return {
  align-items: center;
  background: #ffffff;
  border-radius: 5px 0 0 5px;
  border: 1px solid #c5c5c5;
  border-right: none;
  color: #8f8f8f;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  height: 39px;
  justify-content: center;
  padding: 0px;
  width: 80px;
}
.button-top-right-outer-box {
  display: flex;
}
</style>
