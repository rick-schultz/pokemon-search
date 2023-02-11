<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />

  <FooterComponent />
</template>

<style lang="scss" scoped>

</style>
