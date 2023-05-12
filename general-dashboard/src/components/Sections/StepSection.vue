<template>
  <div type="span" class="step-section" :class="classes" @click="onClick" :style="style">
    <h1 class="section-head">
      {{label}}
    </h1>   
    <div class="checkbox-list" v-for="(item, index) in list" :key="index">
      <button class="mark-step"></button>
      {{ item }}
    </div>
  </div>
</template>

<script>
import '../../assets/scss/StepSection.scss'

export default {
  name: 'MenuLayout',

  components: {},

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
