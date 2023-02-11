<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/"><h1>Pokemon Search</h1></RouterLink>
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #333;
  color: #fff;
  
  nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    div {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>