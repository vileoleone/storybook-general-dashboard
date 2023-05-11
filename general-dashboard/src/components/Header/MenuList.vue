<template>
  <div type="span" class="menu-list" :class="classes" @click="onClick" :style="style">
    
      <li v-for="item in list" :key="item"  :style="{marginBottom: marginBottom + 'px' }">{{ item }}</li>
  
  </div>
</template>

<script>
import '../../assets/scss/MenuList.scss'

export default {
  name: 'MenuLayout',

  components: { },

  props: {
    label: {
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
