<template>
       <a :class="{ isActive: isActive }">{{text}}</a>
</template>

<script lang="ts" >
import './NavButtons.scss';

export default {
  name: 'defaultCard',
    props: {
    text:{
      required: true, 
      type: String, 
      default: 'link'
    },
    isActive: {
      required: true, 
      type: Boolean, 
      default: false
    },
    handleClick: {
      required: true, 
      type: Function, 
    }
  },

}

</script>
