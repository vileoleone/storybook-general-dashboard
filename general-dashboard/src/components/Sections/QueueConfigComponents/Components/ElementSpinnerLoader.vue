<template>
  <div class="outer-container">
    <div class="body-curtain"></div>
    <div type="span" class="spinner-outer-box" :class="classes" @click="onClick" :style="style">
      <div class="lds-ring">
        <div></div>
      </div>
      <span class="spin-h1">Analisando o arquivo</span>
      <span class="spin-h2">Aguarde alguns segundos</span>
    </div>
  </div>
</template>

<script>
import { useMailingStore } from '@/stores/useMailingStore'
import { mapWritableState } from 'pinia'
export default {
  name: 'FieldSpinnerLoader',

  components: {},

  data() {
    return {
      fullPage: true
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
        [`storybook-button--${this.size || 'medium'}`]: true
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    },
    ...mapWritableState(useMailingStore, {
      isLoading: 'isLoading',
      queueToConfig: 'queueToConfig',
      step: 'globalStep',
      csvFile: 'mailingCsvFile',
      readyToProceed: 'readyToProceed',
      stepSectionDict: 'stepSectionDict'
    })
  },

  methods: {
    onCancel() {
      console.log('User cancelled the loader.')
    }
  }
}
</script>

<style scoped lang="scss">
.body-curtain {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: black;
  opacity: 0.5;
  position: absolute;
}

.outer-container {
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
}
.spinner-outer-box {
  box-sizing: border-box;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #aeaaaa;
  display: flex;
  flex-direction: column;
  height: 264px;
  justify-content: center;
  width: 414px;
  position: absolute;
}
.lds-ring {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  z-index: inherit;
  margin-bottom: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #3d55ae #c5c5c5 #c5c5c5 #c5c5c5;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spin-h1 {
  align-items: center;
  color: #444444;
  display: flex;
  font-family: 'Work Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
}

.spin-h2 {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #4a4a4a;
}
</style>
