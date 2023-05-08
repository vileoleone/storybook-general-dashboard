<template>
    <div class="card-wrapper">
        <h4 class = 'title'> {{ title }}</h4>
        <p class="text">{{ text }}</p>
    </div>
</template>
<script lang = 'ts' >
export default {
    name: 'defaultCard',
    props: {
    title:{
        required: true, 
        type: String, 
        default: ''
    },
    text:{
        required: true, 
        type: String, 
        default: ''
    } 
  },
}
</script>
<style scoped lang='scss'>
    .card-wrapper {
        height: 310px;
        width: 310px;
        background-color: #FFFFFF;
        border-radius: 15px;
        padding: 10px;
        border: 2px solid black;
        color: black;
    }


</style>