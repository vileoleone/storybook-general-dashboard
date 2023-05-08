<script  lang="ts">
import DefaultCard from './cards/DefaultCard.vue';

export default {
    props: {
      msg: String
    }, 
    components: {
      DefaultCard
    },
    data() {
    return {
      titleExample: 'products',
      textExample: 'Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.'
  };
}
}



</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
  <DefaultCard
  :title="titleExample"
  :text="textExample"
     />
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
