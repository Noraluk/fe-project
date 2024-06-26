import { CreatedPokemon } from "@/models/created_pokemon";
import { ItemsResponse } from "@/models/items_model";
import { Pokemon } from "@/models/pokemon_model";
import { PokemonsResponse } from "@/models/pokemons_model";
import { api } from "./api";

export async function fetchPokemons(
  pageParam: number,
  name: string,
  pokemonType: string,
  order: string,
  by: string
): Promise<PokemonsResponse> {
  const res = await api.get(
    `/api/pokemons?page=${pageParam}&page_size=20&name=${name}&sort_order=${order}&sort_by=${by}&pokemon_type=${pokemonType}`
  );
  return res.data;
}

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const res = await api.get(`/api/pokemons/${id}`);
  return res.data.data;
}

export async function fetchItems(pageParam: number): Promise<ItemsResponse> {
  const res = await api.get(
    `/api/pokemon-items?page=${pageParam}&page_size=10`
  );
  return res.data;
}

export async function createPokemon(req: CreatedPokemon) {
  const res = await api.post("/api/pokemons", req);
  return res.data;
}

export async function deletePokemon(id: number): Promise<Pokemon> {
  const res = await api.delete(`/api/pokemons/${id}`);
  return res.data;
}