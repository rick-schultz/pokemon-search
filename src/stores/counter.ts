import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/'

export const useCharacterStore = defineStore('character', () => {

  const characters = ref([])

  async function getCharacters() {
    const pokemons = await axios.get(URL + 'pokemon?limit=20&offset=0')
    characters.value = pokemons.data.results
  }

  async function getCharacterById(id: number) {
    const pokemon = await axios.get(URL + 'pokemon/' + id)
    console.log(pokemon.data)
    return pokemon.data
  }
  
  async function getCharacterByName(name: string) {
    const pokemon = await axios.get(URL + 'pokemon/' + name)
    console.log(pokemon.data)
    return pokemon.data
  }

  return { characters, getCharacters, getCharacterById, getCharacterByName }
})