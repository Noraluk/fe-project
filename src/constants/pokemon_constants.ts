interface IColor {
     [key: string]: string
}

export const color: IColor=  {
    'normal': '#A8A77A',
    'fire': '#EE8130',
    'water': '#6390F0',
    'electric': '#F7D02C',
    'grass': '#7AC74C',
    'ice': '#96D9D6',
    'fighting': '#C22E28',
    'poison': '#A33EA1',
    'ground': '#E2BF65',
    'flying': '#A98FF3',
    'psychic': '#F95587',
    'bug': '#A6B91A',
    'rock': '#B6A136',
    'ghost': '#735797',
    'dragon': '#6F35FC',
    'dark': '#705746',
    'steel': '#B7B7CE',
    'fairy': '#D685AD',
  }

interface IPokemonType { 
    [key: string]: string
}

  export const pokemonType: IPokemonType =  {
    'normal': '/pokemon_types/normal.png',
    'fire': '/pokemon_types/fire.png',
    'water': '/pokemon_types/water.png',
    'electric': '/pokemon_types/electric.png',
    'grass': '/pokemon_types/grass.png',
    'ice': '/pokemon_types/ice.png',
    'fighting': '/pokemon_types/fighting.png',
    'poison': '/pokemon_types/poison.png',
    'ground': '/pokemon_types/ground.png',
    'flying': '/pokemon_types/flying.png',
    'psychic': '/pokemon_types/psychic.png',
    'bug': '/pokemon_types/bug.png',
    'rock': '/pokemon_types/rock.png',
    'ghost': '/pokemon_types/ghost.png',
    'dragon': '/pokemon_types/dragon.png',
    'dark': '/pokemon_types/dark.png',
    'steel': '/pokemon_types/steel.png',
    'fairy': '/pokemon_types/fairy.png',
  }

  interface IPokemonStat {
    [key: string]: {
      name: string,
      color: string,
    }
  }

  export const pokemonStat: IPokemonStat = {
    'hp': {
      name: "HP",
      color: "bg-red-500",
    },
    'attack': {
      name: "ATK",
      color: "bg-red-500",
    },
    'defense': {
      name: "DEF",
      color: "bg-yellow-500",
    },
    'special-attack': {
      name: "SpA",
      color: "bg-sky-500",
    },
    'special-defense': {
      name: "SpD",
      color: "bg-lime-500",
    },
    'speed': {
      name: "SPD",
      color: "bg-pink-500",
    },
    'total': {
      name: "TOT",
      color: "bg-indigo-400",
    }
  }

  export const PokemonTypes =  [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ]
