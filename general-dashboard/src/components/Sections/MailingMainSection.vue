<template>
  <div type="span" class="outer-container" :class="classes" @click="onClick" :style="style">
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
	width: 37px;
	height: 23px;
 
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;

	margin-bottom: 18px;
	
	color: #444444;
}

.outer-container{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
	justify-content: flex-start;
  border-top: none;
  border-right: none;
  padding: 30px 0 0 70px;
	background-color: #444444;

  background: #FAFAFA;
  width: 100%;

}

.step-container {
  width: 100%;
  margin-right: 20px;
}
</style>