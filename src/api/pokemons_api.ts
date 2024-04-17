import { Pokemon } from "@/models/pokemon_model";
import { PokemonsResponse } from "@/models/pokemons_model";
import axios from "axios";


export async function fetchPokemons({pageParam}: {pageParam: number}): Promise<PokemonsResponse> {
	const res = await axios.get(`http://localhost:8080/api/pokemons?page=${pageParam}&page_size=20`)
	return res.data
}

export async function fetchPokemon(id: number): Promise<Pokemon> {
	const res = await axios.get(`http://localhost:8080/api/pokemons/${id}`)
	return res.data.data
}

export async function fetchItems(offset: number) : Promise<ItemResponse[]> {
  const items: ItemResponse[] = [];
  const res = await axios.get(`https://pokeapi.co/api/v2/item?offset=${offset}&limit=10`)
  const itemsResponse: ItemsResponse = res.data
  for (const v of itemsResponse.results) {
    const item = await fetchItem(v.url)
    items.push(item)
  }
  return items
}

export async function fetchItem(url: string): Promise<ItemResponse> {
  const res = await axios.get(url)
  return res.data
}