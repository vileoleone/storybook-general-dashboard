<template>
       <a class = "" :class="{ active: isActive }" @click="handleButton">{{text}}</a>
</template>

<script lang="ts" >
import './NavButtons.scss';

export default {
  name: 'NavButtons',
    props: {
    text:{
      required: true, 
      type: String, 
      default: 'link'
    },
  },

  data() {
    return {
      isActive: false
    }
  },

  methods: {
    handleButton()  {
      this.isActive = !this.isActive
    }
  },

}

</script>
