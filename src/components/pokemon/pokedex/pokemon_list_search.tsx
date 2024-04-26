"use client";

import Pokeball from "@/icons/pokeball";
import { isPokemonNameRight } from "@/schemas/pokedex_schema";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import styles from "@/components/pokemon/pokedex/pokemon_list_search.module.css";
import { Option } from "@/models/option_model";
import { PlusIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function PokemonListSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const [pokemonName, setPokemonName] = useState("");
  const [searchingError, setSearchingError] = useState(false);
  const [order, setOrder] = useState(params.get("order") ?? "asc");
  const [pokemonType, setPokemonType] = useState(
    params.get("pokemon_type") ?? ""
  );

  function handleSearch(
    pokemonName: string,
    order: string,
    pokemonType: string
  ) {
    if (pokemonName) {
      params.set("pokemon_name", pokemonName);
    } else {
      params.delete("pokemon_name");
    }

    if (order) {
      params.set("order", order);
    } else {
      params.delete("order");
    }

    if (pokemonType) {
      params.set("pokemon_type", pokemonType);
    } else {
      params.delete("pokemon_type");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div
        className={clsx(
          "flex justify-around items-center py-3 bg-white rounded-xl px-5",
          {
            "border border-red-600": searchingError,
          }
        )}
      >
        <input
          name="pokemonName"
          placeholder="Search your Pokemon!"
          className="block w-3/4 text-lg outline-2 placeholder:text-gray-500 h-10 grow focus:outline-none"
          onChange={(e) => {
            setSearchingError(isPokemonNameRight(e.target.value));
            setPokemonName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSearch(pokemonName, order, pokemonType);
            }
          }}
          defaultValue={searchParams.get("pokemon_name")?.toString()}
        />
        <button
          className={clsx(
            "bg-red-400 rounded-xl shrink-0 h-10 shadow-lg shadow-red-400",
            { "hover:bg-red-500": !searchingError }
          )}
          onClick={() => {
            handleSearch(pokemonName, order, pokemonType);
          }}
          type="submit"
          disabled={searchingError}
        >
          <Pokeball className="h-10 p-1 text-white" />
        </button>
      </div>
      {searchingError && (
        <div>
          <p className="mt-2 text-sm text-red-500">
            Pokemon must not contain special character
          </p>
        </div>
      )}
      <br />
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <Filter
            className="w-36"
            value={order}
            setValue={(value) => {
              console.log(`value ${value}`);
              setOrder(value);
              handleSearch(pokemonName, value, pokemonType);
            }}
            options={[
              {
                value: "asc",
                label: "Ascending",
              },
              {
                value: "desc",
                label: "Descending",
              },
            ]}
          />
          <Filter
            className="w-28 capitalize"
            value={pokemonType}
            setValue={(value) => {
              setPokemonType(value);
              handleSearch(pokemonName, order, value);
            }}
            options={[
              {
                value: "",
                label: "All",
              },
              {
                value: "normal",
                label: "normal",
              },
              {
                value: "fire",
                label: "fire",
              },
              {
                value: "water",
                label: "water",
              },
              {
                value: "electric",
                label: "electric",
              },
              {
                value: "grass",
                label: "grass",
              },
              {
                value: "ice",
                label: "ice",
              },
              {
                value: "fighting",
                label: "fighting",
              },
              {
                value: "poison",
                label: "poison",
              },
              {
                value: "ground",
                label: "ground",
              },
              {
                value: "flying",
                label: "flying",
              },
              {
                value: "psychic",
                label: "psychic",
              },
              {
                value: "bug",
                label: "bug",
              },
              {
                value: "rock",
                label: "rock",
              },
              {
                value: "ghost",
                label: "ghost",
              },
              {
                value: "dragon",
                label: "dragon",
              },
              {
                value: "dark",
                label: "dark",
              },
              {
                value: "steel",
                label: "steel",
              },
              {
                value: "fairy",
                label: "fairy",
              },
            ]}
          />
        </div>
        <div className="flex mr-6">
          <Link
            href="/pokemon/pokedex/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <span className="hidden md:block">Create Pokemon</span>{" "}
            <PlusIcon className="h-5 md:ml-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

export function PokemonDetailLoading() {
  return (
    <div className="flex items-center justify-center h-full">
      <MoonLoader />
    </div>
  );
}

function Filter({
  className,
  value,
  setValue,
  optionName,
  options,
  defaultValue,
}: {
  className?: string;
  value: string;
  setValue: (value: string) => void;
  optionName?: string;
  options: Option[];
  defaultValue?: string;
}) {
  return (
    <select
      className={clsx(
        "rounded-xl p-3 text-slate-500 bg-white py-2 px-4",
        styles.dropdown,
        className
      )}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {optionName != undefined && (
        <option value="" disabled>
          {optionName!}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
