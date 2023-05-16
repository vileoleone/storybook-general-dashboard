<template>
  <div type="span" class="queue-option-box" :class="classes" :style="style">
    <label class="queue-header"> Escolha a Fila * </label>
    <button class="option-box" :class="{ 'option-box-active': this.active }" @click="onClick">
      Escolha uma opção
      <img v-if="this.active == false" :src="TriangleDown" alt="closed options" />
      <img v-if="this.active == true" :src="TriangleUp" alt="open options" />
    </button>
    <div class="queues" v-if="active == true">
      <div v-for="(item, index) in list" :key="index" class="option-box-queue">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import TriangleDown from '../../../../src/assets/icons/TriangleDown.svg'
import TriangleUp from '../../../../src/assets/icons/TriangleUp.svg'
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
    }
  },

  methods: {
    onClick() {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
.queues {
  display: flex;
  flex-direction: column;
}

.queue-header {
  width: 97px;
  height: 15px;
  margin-bottom: 7px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #444444;
}

.queue-option-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.option-box {
  box-sizing: border-box;
  display: flex;
  padding: 10px 12px;
  justify-content: space-between;
  align-items: center;

  width: 505px;
  height: 35px;

  background: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 5px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;

  color: #8b949e;
}

.option-box-queue {
  box-sizing: border-box;

  display: flex;
  align-self: center;
  flex-direction: column;
  padding: 10px 12px;
  width: 505px;
  height: 35px;

  background: #ffffff;
  border: 1px solid #ced4da;
  border-top: none;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;

  color: #8b949e;
}

.option-box-active {
  border-radius: 0;
}
</style>
