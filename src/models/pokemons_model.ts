export interface PokemonsResponse {
  data: PokemonModel[];
  total_records: number;
  current_page: number;
  total_pages: number;
}

export interface PokemonModel {
  id: number;
  name: string;
  sprite_front_default_showdown_url: string;
  pokemon_types: Pokemontype[];
}

export interface Pokemontype {
  name: string;
}

