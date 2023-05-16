<template>
  <div type="span" class="step-section" :class="classes" @click="onClick" :style="style">
    <h1 class="section-head">
      {{ label }}
    </h1>
    <div class="step-div">
      <div v-for="(subtext, label, index) in dict" :key="index" class="step-div">
        <StepsSectionComponent :label="label" :index="index" :subtext="subtext" :step="step" />
      </div>
    </div>
  </div>
</template>

<script>
import StepsSectionComponent from './stepsSectionComponent.vue'
export default {
  name: 'StepSection',

  components: { StepsSectionComponent },

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
    dict: {
      type: Object
    },
    step: {
      type: Number
    },
    index: {
      type: Number
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
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.step-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 50px 0 60px;

  width: fit-content;
  height: 100%;

  background: #ffffff;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;

  color: #444444;
}

.section-head {
  width: 141px;
  height: 15px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #444444;
}

.step-div {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 18px;
  margin-bottom: 14px;
}
</style>
