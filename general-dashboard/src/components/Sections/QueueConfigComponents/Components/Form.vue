<template>
  <div type="form" class="fl-jcst-alst-fdcolumn mb15px" :class="classes" :style="style">
    <label class="mb5px fl-jcst-alcnt-fdcolumn fs13-fw600-cl44">
      {{ label }}
    </label>
    <button
      class="fl-jcsb-alcnt-fdrow fs13-fw400-cl8B borderCE br5px pb10px pt10px pl10px pr15px cursor-pointer"
      :class="{ 'option-box-active': this.active }"
      @click="onClick"
      :style="[this.active ? activeFormStyle : formStyle]"
    >
      {{ this.placeholder }}
      <img v-if="this.active == false" :src="TriangleDown" alt="closed options" />
      <img v-if="this.active == true" :src="TriangleUp" alt="open options" />
    </button>
    <div class="fl-jccnt-alcnt-fdcolumn" v-if="active == true">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="fl-jcsb-alst-fdrow fs13-fw400-cl8B borderCE borderTopNone br0 pb10px pt10px pl10px pr20px cursor-pointer"
        @click="this.onChoice(item)"
        :style="[this.active ? activeFormStyle : formStyle]"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import TriangleDown from '%/icons/TriangleDown.svg'
import TriangleUp from '%/icons/TriangleUp.svg'
import { useMailingStore } from '@/stores/useMailingStore'
import { mapWritableState } from 'pinia'
export default {
  name: 'FormComponent',

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
    width: {
      type: String
    },
    list: {
      type: Array
    },
    placeholder: {
      type: String
    },
    onChoice: {
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
    formStyle() {
      return {
        width: this.width,
        borderRadius: '5px'
      }
    },
    activeFormStyle() {
      return {
        width: this.width,
        borderRadius: '0'
      }
    },
    ...mapWritableState(useMailingStore, {
      step: 'globalStep',
      queueToConfig: 'queueToConfig',
      readyToProceed: 'readyToProceed',
      isLoading: 'isLoading'
    })
  },

  methods: {
    onClick() {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss"></style>
