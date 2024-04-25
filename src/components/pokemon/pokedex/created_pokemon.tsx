export interface CreatedPokemon {
  pokemon_id: number;
  name: string;
  sprite_front_default_official_artwork_url: string;
  sprite_front_default_showdown_url: string;
  pokemon_types: string[];
  pokemon_abilities: string[];
  height: number;
  weight: number;
  base_experience: number;
  pokemon_stats: CreatedPokemonStat[];
  evolved_pokemon_id?: number;
  minimum_level: number;
  base_pokemon_id: number;
}

export interface CreatedPokemonStat {
  name: string;
  base_stat: number;
}
