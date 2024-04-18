import { ItemsResponse } from "@/models/items_model";
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

export async function fetchItems(pageParam: number) : Promise<ItemsResponse> {
  const res = await axios.get(`http://localhost:8080/api/pokemons/items?page=${pageParam}&page_size=10`)
  return res.data
}
