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
    query?: string;
    page?: string;
  };
}) {
  const [pokemonName, setPokemonName] = useState("");
  console.log(searchParams?.query);

  return (
    <div className="flex justify-center mx-20 h-full overflow-hidden">
      <div className="flex flex-col grow">
        <PokemonListSearch />
        <br />
        <PokemonList
          setPokemonName={setPokemonName}
          pokemonSearch={searchParams?.query ?? ""}
        />
      </div>
      <div className="flex flex-col w-[450px]">
        <div className="h-1/6" />
        <div className="grow bg-white w-full h-full rounded-2xl relative">
          {pokemonName.length > 0 && (
            <Suspense fallback={<PokemonDetailLoading />}>
              <PokemonDetail
                pokemonName={pokemonName}
                setPokemonName={setPokemonName}
              />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
