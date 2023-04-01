<template>
  <a-layout>
    <a-layout-header class="bg-all">
      <router-link to="/">
        <img
          :width="110"
          src="https://santatecla.gob.sv/wp-content/uploads/2022/06/LOGOAzUL.png"
        />
      </router-link>
    </a-layout-header>
    <a-layout-content class="bg-all">
      <Home />
    </a-layout-content>
    <a-layout-footer class="bg-all">
      Prueba tecnica para alcaldia de Santa Tecla :)
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
  import Home from "../components/Home.vue";
</script>

<style>
  .bg-all {
    background-color: #fff;
  }
</style>
