<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCharacterStore } from '@/stores/counter';

const store = useCharacterStore()

const route = useRoute()

store.getCharacterByName(route.params.id as string)
</script>

<template>
  <div class="container">
    <div class="list">
      <div class="list">
        <img :src="store.character.sprites.other.dream_world.front_default" :alt="store.character.name">
        <p>Name: {{ store.character.name }}</p>
        <p v-for="item in store.character.stats" :key="item.stat.name">
          {{ item.stat.name }}: {{ item.base_stat }}
        </p>
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

  img {
    width: 150px;
    height: 150px;
  }
}
</style>
