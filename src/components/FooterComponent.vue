<script setup lang="ts">

</script>

<template>
  <div class="container">
    <footer>
      <p>&copy; Rick Schultz</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 1rem;
  background-color: #333;
  color: #fff;
  
  footer {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;

    div {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>