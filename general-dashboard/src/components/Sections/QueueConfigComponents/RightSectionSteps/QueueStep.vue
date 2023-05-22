<template>
  <div type="span" class="queue-step-outer-box" :class="classes" :style="style">
    <label class="queue-header-step"> Escolha a Fila * </label>
    <button class="option-box" :class="{ 'option-box-active': this.active }" @click="onClick">
      {{ this.queueToConfig }}
      <img v-if="this.active == false" :src="TriangleDown" alt="closed options" />
      <img v-if="this.active == true" :src="TriangleUp" alt="open options" />
    </button>
    <div class="queues" v-if="active == true">
      <div v-for="(item, index) in list" :key="index" class="queue" @click="chooseQueue(item)">
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
  name: 'QueueStep',

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
      queueToConfig: 'queueToConfig',
      readyToProceed: 'readyToProceed',
      isLoading: 'isLoading'
    })
  },

  methods: {
    onClick() {
      this.active = !this.active
    },
    chooseQueue(item) {
      this.readyToProceed = true
      this.queueToConfig = item
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
.option-box {
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  color: #8b949e;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  height: 35px;
  justify-content: space-between;
  padding: 10px 12px;
  width: 505px;
}
.option-box-active {
  border-radius: 0;
}
.queue {
  align-self: center;
  background: #ffffff;

  border: 1px solid #ced4da;
  border-top: none;
  box-sizing: border-box;
  color: #8b949e;
  display: flex;
  flex-direction: column;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  height: 35px;
  padding: 10px 12px;
  width: 505px;
}
.queues {
  display: flex;
  flex-direction: column;
}
.queue-header-step {
  align-items: center;
  color: #444444;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  height: 15px;
  line-height: 15px;
  margin-bottom: 7px;
  width: 97px;
}
.queue-step-outer-box {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
</style>
