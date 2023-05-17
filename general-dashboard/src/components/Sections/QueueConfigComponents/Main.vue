<template>
  <div type="span" class="main-outer-box" :class="classes" @click="onClick" :style="style">
   <h1 class="mailing-main-header">{{ label }}</h1>
    <div  class="step-container" >
      <component :list="queues" :is="vueComponent"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MailingMainSection',

  components: { },

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
    queues: {
      type: Array
    },
    vueComponent: {}, 
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

<style lang="scss">
  .mailing-main-header {  
    
    color: #444444;
    font-family: 'Work Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    height: 23px;
    margin-bottom: 18px;
    width: 37px;
  }

  .main-outer-box{
    align-items: flex-start;
    background-color: #444444;
    background: #FAFAFA;
    border-right: none;
    border-top: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 0 0 70px;
    width: 100%;

  }

  .step-container {
    margin-right: 20px;
    width: 100%;
  }
</style>