<template>
    <div type="span" class="step-section-component" :class="classes" @click="onClick" :style="style">
       
            <div class="list-label" v-if="concluded == false & routerName !== label">
                
                <div class="checkbox"></div>

                {{ label }}
                
            </div>
               
            <div class="list-label marked"  v-if="concluded == false  & routerName == label">
                
                <div class="checkbox marked"></div>

                {{ label }}
                
            </div>

            <div class="list-label concluded"  v-if="concluded == true">
                
                <div class="checkbox concluded"> <img :src="Checked" alt="Checked"/></div>

                {{ label }}
                
            </div>

            <div  v-if="concluded == true" :class="subtext">
                {{ subtext }}
            </div>

    </div>
  </template>
  
  <script>
  import '../../assets/scss/StepSection.scss'
  import Checked from '../../../src/assets/icons/Checked.svg'

  export default {
    name: 'MenuLayout',
  
    components: {},

    data() {
        return {
            Checked
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
      concluded: {
        type: Boolean,
      },
      subtext: {
        type: String,
      }, 
      routerName: {
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
  