<template>
    <div type="div" class="next-section-title" :class="classes" @click="onClick" :style="style">
      <h1>{{ label }}</h1>
      <span class="allRoutes">
      <span v-for="(route,index) in list" :key="index" class="routes">
        <h2> {{ route }}</h2>
        <img :src="ChevronRight" :alt="label" class="chevron-right">
      </span>
    </span>
    </div>
  </template>
  
  <script>

  import ChevronRight from '../../../src/assets/icons/ChevronRight.svg'
  
  export default {
    name: 'MenuLayout',
  
    components: {},

    data() {
      return {
        ChevronRight
      }
    },
  
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
      list: {
        type: Array,
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
  
  <style lang="scss">
    .next-section-title {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
   .routes {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
    } 
    .allRoutes {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }

    h1 {
      width: 213px;
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      color: #444444;
      margin-bottom: 5px;
      margin-top: 0;
    
    }

    h2 {
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 11px;

      color: #AFAFAF;

      height: 13px;
    }

    .chevron-right {
      margin-left: 12px;
      margin-right: 12px;
    }

  </style>