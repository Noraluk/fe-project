import { deletePokemon, fetchPokemons } from "@/api/pokemons_api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { color } from "@/constants/pokemon_constants";
import { PokemonModel } from "@/models/pokemons_model";
import { XCircleIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import ConnectionFailedModal from "@/components/connection_failed_modal";

export default function PokemonList({
  setPokemonID,
  pokemonSearch = "",
  pokemonType = "",
  order = "asc",
  by = "id",
}: {
  setPokemonID: Dispatch<SetStateAction<number>>;
  pokemonSearch?: string;
  pokemonType?: string;
  order?: string;
  by?: string;
}) {
  const { ref, inView } = useInView();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    data: pokemons,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isError,
  } = useInfiniteQuery({
    queryKey: ["pokemons", pokemonSearch, pokemonType, order, by],
    queryFn: ({ pageParam = 1, queryKey }) => {
      return fetchPokemons(
        pageParam,
        queryKey[1],
        queryKey[2],
        queryKey[3],
        queryKey[4]
      );
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.current_page === lastPage.total_pages) {
        return undefined;
      }
      return lastPage.current_page + 1;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  useEffect(() => {
    if (isError) {
      onOpen();
    }
  }, [isError, onOpen]);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />;
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-10 overflow-y-scroll py-7 pr-4">
        {pokemons?.pages.map((page, pageIndex) =>
          page.data.map((pokemon: PokemonModel, index: number) => {
            if (page.data.length == index + 1) {
              return (
                <Pokemon
                  key={index}
                  pokemon={pokemon}
                  innerRef={ref}
                  setPokemonID={setPokemonID}
                  onClick={() => {
                    refetch();
                  }}
                />
              );
            }
            return (
              <Pokemon
                key={index}
                pokemon={pokemon}
                setPokemonID={setPokemonID}
                onClick={() => {
                  refetch();
                }}
              />
            );
          })
        )}
      </div>
      {isFetchingNextPage && <Loading innerRef={ref} />}
      <ConnectionFailedModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

function Pokemon({
  pokemon,
  setPokemonID,
  innerRef,
  onClick,
}: {
  pokemon: PokemonModel;
  setPokemonID: Dispatch<SetStateAction<number>>;
  innerRef?: (node?: Element | null | undefined) => void;
  onClick: () => void;
}) {
  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-end py-5 gap-1 bg-white rounded-xl h-36 shadow-lg relative text-center hover:bg-gray-300 hover:cursor-pointer"
        ref={innerRef}
        onClick={(e) => {
          setPokemonID(pokemon.id);
        }}
      >
        <Image
          src={pokemon.sprite_front_default_showdown_url}
          alt=""
          width="0"
          height="0"
          className="w-auto h-16"
          unoptimized
        />
        <p className="text-gray-600 font-bold text-sm">{`#${pokemon.pokemon_id}`}</p>
        <p className="font-bold text-black">{pokemon.name}</p>
        <div className="flex gap-2">
          {pokemon.pokemon_types.map((pokemonType, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: color[pokemonType.name],
                }}
                className="rounded-lg px-1.5 py-1"
              >
                <p style={{ fontSize: "12px" }} className="font-bold uppercase">
                  {pokemonType.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <XCircleIcon
        className="absolute w-8 h-8 top-0 right-0 cursor-pointer"
        onClick={async (e) => {
          await deletePokemon(pokemon.id);
          onClick();
        }}
      />
      ;
    </div>
  );
}

function Loading({
  innerRef,
}: {
  innerRef?: (node?: Element | null | undefined) => void;
}) {
  return (
    <div ref={innerRef} className="col-span-1 flex items-center justify-center">
      <svg
        aria-hidden="true"
        className="h-10 w-10 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
