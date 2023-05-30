<template>
  <div type="span" :class="classes" @click="onClick" :style="style" v-if="this.fileIsLoaded">
    <button
      class="bclightblue border4B br5px mb20px fl-jccnt-alcnt-fdrow fs12-fw700-clFF p20px wd100 ht100"
      :class="classes"
      @click="clickFunction"
      :style="style"
    >
      {{ label }}
      <img class="ml10px" :src="ArrowRightIcon" alt=" Arrow right" />
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
    clickFunction: {
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

<style scoped lang="scss"></style>
