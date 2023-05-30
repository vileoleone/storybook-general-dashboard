<template>
  <div type="span" class="step-section" :class="classes" @click="onClick" :style="style">
    <h1 class="section-head">
      {{ label }}
    </h1>
    <div class="step-div">
      <div v-for="(subtext, label, index) in dict" :key="index" class="step-div">
        <ListLeftSection :label="label" :index="index" :subtext="subtext" :step="step" />
      </div>
    </div>
  </div>
</template>

<script>
import ListLeftSection from '../Components/ListLeftSection.vue'
export default {
  name: 'LeftSectionSteps',

  components: { ListLeftSection },

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
  align-items: flex-start;
  background: #ffffff;
  color: #444444;
  display: flex;
  flex-direction: column;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;

  padding: 30px 0 0 4.8%;
  width: 28%;
}

.section-head {
  align-items: center;
  color: #444444;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  height: 15px;
  line-height: 15px;
  width: 141px;
}

.step-div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 18px;
  margin-bottom: 14px;
}
</style>
