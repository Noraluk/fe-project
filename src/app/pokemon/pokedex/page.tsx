"use client";

import {
  PokemonDetail,
  PokemonDetailLoading,
} from "@/components/pokemon/pokedex/pokemon_detail";
import PokemonList from "@/components/pokemon/pokedex/pokemon_list";
import PokemonListSearch from "@/components/pokemon/pokedex/pokemon_list_search";
import { Suspense, useState } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    pokemon_name?: string;
    pokemon_type?: string;
    order?: string;
    page?: string;
  };
}) {
  const [pokemonID, setPokemonID] = useState(0);

  return (
    <div className="flex justify-center mx-20 h-full overflow-hidden">
      <div className="flex flex-col grow">
        <PokemonListSearch />
        <br />
        <PokemonList
          setPokemonID={setPokemonID}
          pokemonSearch={searchParams?.pokemon_name ?? ""}
          pokemonType={searchParams?.pokemon_type ?? ""}
          order={searchParams?.order}
        />
      </div>
      <div className="flex flex-col w-[450px]">
        <div className="h-1/6" />
        <div className="grow bg-white w-full h-full rounded-2xl relative">
          {pokemonID > 0 && (
            <Suspense fallback={<PokemonDetailLoading />}>
              <PokemonDetail
                pokemonID={pokemonID}
                setPokemonID={setPokemonID}
              />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
