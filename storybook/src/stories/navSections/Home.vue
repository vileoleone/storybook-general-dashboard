<template>
  <section class="home-section">
   <div class="left-box">
      <h1>Vonix Tecnologia</h1>
        <h2 class="calibri-text">Aumente a produtividade do seu Contact Center</h2>
        <h2 class="calibri-text">Empresa líder em soluções para Contact Centers e Telefonia IP</h2>
        <h2 class="calibri-text">Atuante em vários Estados Brasileiros</h2>
        <button class="calibri-text">
        <img src='../assets/images/button.png' alt="conheça nossa Empresa">
        </button>
    </div>
    <img class="agent-photo" src="../assets/images/nav-photo.png" alt="agent">
  </section>
</template>

<script lang="ts" >
import './home.scss';

export default {
  name: 'defaultCard',
    props: {
    user:{
        required: true, 
        type: String, 
        default: 'Jane Doe'
    }
  }
}

</script>
