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
          <div v-for="stat in character.stats" :key="stat">
            <p>HP: {{ stat }}</p>
            <p>Attack: {{ stat }}</p>
            <p>Defense: {{ stat }}</p>
            <p>Special attack: {{ stat }}</p>
            <p>Special defense: {{ stat }}</p>
            <p>Speed: {{ stat }}</p>
          </div>
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
