<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCharacterStore } from '@/stores/counter';

const store = useCharacterStore()

const route = useRoute()

store.getCharacter(route.params.id as string)
</script>

<template>
  <div class="container">
    <div class="list">
      <div v-for="character in store.characters" :key="character.name">
        <div v-if="character.name" class="list">
          <p>Name: {{ character.name }}</p>
          <p>HP:</p>
          <p>Attack:</p>
          <p>Defense:</p>
          <p>Special attack:</p>
          <p>Special defense:</p>
          <p>Speed:</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .list {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
