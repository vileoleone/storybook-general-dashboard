<template>
  <li :class="classes" :style="style" @mouseover="onMouse" @mouseleave="onMouse">
    {{ label }}
  </li>
</template>

<script>

export default {
  name: 'MenuLayout',

  components: {},

  data() {
    return {
      isActive: false,
      clicked: false
    }
  },

  props: {
    label: {
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
    },
    marginBottom: {
      type: String
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
        active: this.isActive || this.clicked
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        marginBottom: this.marginBottom + 'px'
      }
    }
  },

  methods: {
    onMouse() {
      this.isActive = !this.isActive
    }
  }
}
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

  padding: 30px 0 0 70px;
		background-color: #444444;

  width: 1133px;
  height: 619px;

  background: #FAFAFA;
  border: 1px solid #CED4DA ;
  border-radius: 0px;
    
}

.step-container {
		border-top: 1px solid #CED4DA;
		padding: 18px;
}
</style>
