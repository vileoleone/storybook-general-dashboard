<template>
       <a class="Home" :class="{ isActive: isActive }" @click='handleClick'>Home</a>
</template>

<script lang="ts" >
import './NavButtons.scss';

export default {
  name: 'defaultCard',
    props: {
    user:{
        required: true, 
        type: String, 
        default: 'Jane Doe'
    }
  },



  data() {
    return {
      isActive: false
    }
  },
  methods: {
  handleClick() {
    this.isActive = !this.isActive
  }
},
   
}

</script>
