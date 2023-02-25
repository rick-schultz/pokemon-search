import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/'

interface CharactersProps {
  name: string
  url: string
  stats: {
    base_stat: number,
    stat: {
      name: string
    }
  }[]
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

export const useCharacterStore = defineStore('character', () => {
  const characters = ref<CharactersProps[]>([])

  const character = ref<CharactersProps>({} as CharactersProps)

  async function getCharacters() {
    try {
      const character = await axios.get(URL + 'pokemon?limit=20&offset=0')
      characters.value = character.data.results
    }
    catch (error) {
      characters.value = []
    }
  }

  async function getCharacter(value: string) {
    try {
      if (value === '') {
        getCharacters()
      } else {
        const character = await axios.get(URL + 'pokemon/' + value)
        characters.value = character.data
      }
    }
    catch (error) {
      characters.value = []
    }
  }

  async function getCharacterByName(value: string) {
    try {
      if (value === '') {
        getCharacters()
      } else {
        const pokemon = await axios.get(URL + 'pokemon/' + value)
        character.value = pokemon.data
      }
    }
    catch (error) {
      character.value = {} as CharactersProps
    }
  }

  return { character, characters, getCharacters, getCharacter, getCharacterByName }
})