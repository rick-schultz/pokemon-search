<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterStore } from '@/stores/counter';

const input = ref()
const store = useCharacterStore()

store.getCharacters()

const clearCharacters = () => {
  input.value = ''
  store.getCharacters()
}
</script>

<template>
  <div class="container">
    <div class="main">
      <form>
        <input type="text" id="searchBar" v-model="input" placeholder="Search for a character"
          @keyup.enter="store.getCharacter(input)">
        <button @click.prevent="store.getCharacter(input)">Search</button>
        <button @click.prevent="clearCharacters()">Clear</button>
      </form>
    </div>
    <div v-if="store.characters.length === 0">
      <p>No characters found</p>
    </div>
    <div v-for="character in store.characters" :key="character.name">
      <div v-if="character.name" class="list">
        <RouterLink :to="`/character/${character.name}`">
          <p>{{ character.name }}</p>
          <p>{{ character.url }}</p>
        </RouterLink>
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

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .list {
    margin-bottom: 1rem;
  }
}
</style>
