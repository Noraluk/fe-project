export interface PokemonResponse {
  data: Pokemon;
}

export interface Pokemon {
  id: number;
  pokemon_id: number;
  name: string;
  sprite_front_default_official_artwork_url: string;
  pokemon_types: Pokemontype[];
  pokemon_abilities: Pokemontype[];
  height: number;
  weight: number;
  base_experience: number;
  pokemon_weaknesses: Pokemontype[];
  pokemon_stats: Pokemonstat[];
  evolved_pokemon?: Evolvedpokemon;
  next_pokemon: Nextpokemon;
  prev_pokemon: Nextpokemon;
}

interface Nextpokemon {
  id: number;
  pokemon_id: number;
  name: string;
  sprite_front_default_showdown_url: string;
}

interface Evolvedpokemon {
  id: number;
  sprite_front_default_official_artwork_url: string;
  minumum_level: number;
  evolved_pokemon?: Evolvedpokemon;
}

interface Pokemonstat {
  name: string;
  base_stat: number;
}

interface Pokemontype {
  name: string;
}