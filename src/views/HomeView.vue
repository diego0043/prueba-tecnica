<template>
  <a-layout>
    <a-layout-content class="bg-all">
      <Home />
    </a-layout-content>
  </a-layout>
</template>

<script setup>
  import Home from "../components/Home.vue";
</script>

<style>
  .bg-all {
    background-color: #fff;
  }

  .link-class {
    background-color: aqua !important;
  }

/*   @media only screen and (max-width: 768px) {
    .img-navbar {
      display: block;
      margin: auto;
      margin-top: 5px;
    }
  }
  @media only screen and (min-width: 769px) {
    .img-navbar {
      display: block;
      margin-top: 5px;
    }
  } */
</style>
