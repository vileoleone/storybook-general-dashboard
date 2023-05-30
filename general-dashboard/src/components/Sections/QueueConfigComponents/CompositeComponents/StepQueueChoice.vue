<template>
  <FormComponent
    label="Escolha uma Fila *"
    width="500px"
    placeholder="Escolha uma opção"
    :list="this.queues"
    :onChoice="choiceFunction"
  />
</template>

<script>
import TriangleDown from '%/icons/TriangleDown.svg'
import TriangleUp from '%/icons/TriangleUp.svg'
import { default as FormComponent } from '../Components/Form.vue'
import { useMailingStore } from '@/stores/useMailingStore'
import { mapWritableState } from 'pinia'
export default {
  name: 'QueueStep',

  components: { FormComponent },

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
      queues: 'queues',
      queueToConfig: 'queueToConfig',
      readyToProceed: 'readyToProceed',
      isLoading: 'isLoading'
    })
  },

  methods: {
    onClick() {
      this.active = !this.active
    },
    choiceFunction(item) {
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
