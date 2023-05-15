<template>
    <div type="span" class="step-section-component" :class="classes" @click="onClick" :style="style">
            <div class="list-label" v-if="step < index">
                
                <div class="checkbox"></div>

                {{ label }}
                
            </div>
               
            <div class="list-label marked"  v-if="step == index">
                
                <div class="checkbox marked"></div>

                {{ label }}
                
            </div>

            <div class="list-label concluded"  v-if="step > index">
                
                <div class="checkbox concluded"> <img :src="Checked" alt="Checked"/></div>

                {{ label }}
                
            </div>

            <div v-if="step > index" class="subtext">
                {{ subtext }}
            </div>

    </div>
  </template>
  
  <script>

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
      subtext: {
        type: String,
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

    .checkbox {
      width: 7px;
      height: 7px;
      border: #7C7C7C 1px solid;
      border-radius: 9px;
      margin-right: 6px;
    }

    .checkbox.marked { 
      border: #3D55AE 1px solid;
      background-color:#3D55AE ;
    }

    .checkbox.concluded { 
      border:#7C7C7C 1px solid;
      background-color:#7C7C7C ;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
          position: absolute;
          display: flex;
          align-self: center;
      }
    }

    .list-label {
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      width: fit-content;
      height: fit-content;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      color: #7C7C7C;
    }

    .list-label.concluded {
      color: #7C7C7C;
    }

    .list-label.marked {
      color: #3D55AE;
    }

    .subtext {
      width: 135px;
      height: 14px;
      margin-left: 15px;
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      display: flex;
      align-items: center;

      color: #7C7C7C;
    }

  </style>