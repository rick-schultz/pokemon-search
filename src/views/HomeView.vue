<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterStore } from '@/stores/counter';

const store = useCharacterStore()

store.getCharacters()
store.getCharacterById(132)
store.getCharacterByName('ditto')

const clearValue = () => {
  input.value = ''
}

const input = ref('Something')

</script>

<template>
  <div class="main">
    <input type="text" id="searchBar" v-model="input" placeholder="Search for a character">
    <button @click="clearValue()">Clear</button>
  </div>
  <div
  v-for="character in store.characters"
  :key="character.name"
  >
  <p>{{ character.name }}</p>
  <a>{{ character.url }}</a>
  </div>
</template>


<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
