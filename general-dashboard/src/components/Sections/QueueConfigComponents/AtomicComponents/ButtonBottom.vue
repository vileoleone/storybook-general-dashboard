<template>
  <div type="span" :class="classes" @click="onClick" :style="style" v-if="this.fileIsLoaded">
    <button type="button" class="button-bottom" :class="classes" @click="onClick" :style="style">
      {{ label }}
      <img :src="ArrowRightIcon" alt=" Arrow right" />
    </button>
  </div>
</template>

<script>
import ChevronRight from '@/assets/icons/ChevronRight.svg'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon.svg'
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
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
    onClick: {
      type: Function
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
    },
    ...mapWritableState(useMailingStore, {
      step: 'globalStep',
      fileIsLoaded: 'mailingCsvFile',
      isLoading: 'isLoading',
      readyToProceed: 'readyToProceed:'
    })
  }
}
</script>

<style scoped lang="scss">
.button-bottom {
  align-items: center;
  background: #4b68d2;
  border-radius: 5px;
  border: 2px solid #4b68d2;
  color: #ffffff;
  display: flex;
  font-family: 'Work Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  height: 55px;
  justify-content: center;
  line-height: 12px;
  padding: 20px;
  width: 100%;

  img {
    margin-left: 7px;
  }
}
</style>
