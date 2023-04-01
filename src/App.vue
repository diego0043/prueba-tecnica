<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  HomeView  from './views/HomeView.vue'
</script>

<template>
  <RouterView />
</template>

<style scoped>
.header {
  background-color: #fff;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
</style>
