<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">
        <h1>Pokemon Search</h1>
      </RouterLink>
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
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
}
</style>