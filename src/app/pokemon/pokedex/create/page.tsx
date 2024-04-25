"use client";

import { PokemonTypes, pokemonType } from "@/constants/pokemon_constants";
import { PlusIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import clsx from "clsx";
import { CreatedPokemon } from "@/components/pokemon/pokedex/created_pokemon";
import { Modal } from "@/components/pokemon/modal";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";

import "./page.css";
import { createPokemon } from "@/api/pokemons_api";
import Link from "next/link";

export default function Page() {
  const [showPokemonTypes, setShowPokemonTypes] = useState(false);
  const [pokemonAbility, setPokemonAbility] = useState("");
  const [createdPokemon, setCreatedPokemon] = useState<CreatedPokemon>({
    pokemon_id: 0,
    name: "",
    sprite_front_default_official_artwork_url: "",
    sprite_front_default_showdown_url: "",
    pokemon_types: [],
    pokemon_abilities: [],
    height: 0,
    weight: 0,
    base_experience: 0,
    pokemon_stats: [],
    minimum_level: 0,
    base_pokemon_id: 0,
  });
  const [showSpriteOAModal, setShowSpriteOAModal] = useState(false);
  const [showSpriteShowdownModal, setShowSpriteShowdownModal] = useState(false);
  const [isSelectedBasePokemonID, setIsSelectedBasePokemonID] = useState(false);

  return (
    <>
      <div className="h-4/5 mx-56 bg-white p-5 overflow-y-scroll">
        <div className="flex items-center">
          <p className="font-medium w-1/2">Pokemon ID</p>
          <input
            type="text"
            className="w-2/5 h-10 rounded-md px-2 border border-gray-400"
            onChange={(e) => {
              setCreatedPokemon((v) => ({
                ...v,
                pokemon_id: Number(e.target.value),
              }));
              console.log(createdPokemon.pokemon_id);
            }}
          />
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Pokemon Name</p>
          <input
            type="text"
            className="w-2/5 h-10 rounded-md px-2 border border-gray-400"
            onChange={(e) => {
              setCreatedPokemon((v) => ({
                ...v,
                name: e.target.value,
              }));
            }}
          />
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Sprite Official Artwork URL</p>
          <div
            className="w-28 h-28 rounded-md border border-gray-400 flex justify-center items-center cursor-pointer relative"
            onClick={(e) => {
              setShowSpriteOAModal(true);
            }}
          >
            {!createdPokemon.sprite_front_default_official_artwork_url && (
              <PlusIcon className="w-16 h-16 text-black" />
            )}
            {createdPokemon.sprite_front_default_official_artwork_url && (
              <Image
                src={createdPokemon.sprite_front_default_official_artwork_url}
                alt={""}
                layout="fill"
                objectFit="cover"
                className="p-1"
              />
            )}
          </div>
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Sprite Showdown URL</p>
          <div
            className="w-28 h-28 rounded-md border border-gray-400 flex justify-center items-center cursor-pointer relative"
            onClick={(e) => {
              setShowSpriteShowdownModal(true);
            }}
          >
            {!createdPokemon.sprite_front_default_showdown_url && (
              <PlusIcon className="w-16 h-16 text-black" />
            )}
            {createdPokemon.sprite_front_default_showdown_url && (
              <Image
                src={createdPokemon.sprite_front_default_showdown_url}
                alt={""}
                layout="fill"
                objectFit="cover"
                className="p-1"
              />
            )}
          </div>
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Height</p>
          <InputNumber
            onChange={(v) => {
              setCreatedPokemon((pm) => ({
                ...pm,
                height: Number(v),
              }));
            }}
          />
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Weight</p>
          <InputNumber
            onChange={(v) => {
              setCreatedPokemon((pm) => ({
                ...pm,
                weight: Number(v),
              }));
            }}
          />
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Base Experience</p>
          <InputNumber
            onChange={(v) => {
              setCreatedPokemon((pm) => ({
                ...pm,
                base_experience: Number(v),
              }));
            }}
          />
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Evolved Pokemon ID : </p>
          <InputNumber
            onChange={(v) => {
              setCreatedPokemon((pm) => ({
                ...pm,
                evolved_pokemon_id: Number(v),
              }));
            }}
          />
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Minimum Level : </p>
          <InputNumber
            onChange={(v) => {
              setCreatedPokemon((pm) => ({
                ...pm,
                minimum_level: Number(v),
              }));
            }}
          />
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Base Pokemon ID : </p>
          <div className="flex gap-x-2">
            <div className="flex items-center">
              <input
                type="text"
                className="w-28 h-10 rounded-md px-2 border border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => {
                  setCreatedPokemon((pm) => ({
                    ...pm,
                    base_pokemon_id: Number(e.target.value),
                  }));
                }}
                disabled={isSelectedBasePokemonID}
                defaultValue={""}
                value={
                  isSelectedBasePokemonID
                    ? createdPokemon.pokemon_id
                    : createdPokemon.base_pokemon_id
                }
              />
            </div>
            <Checkbox
              isSelected={isSelectedBasePokemonID}
              onValueChange={(e) => {
                setIsSelectedBasePokemonID(e);
                setCreatedPokemon((pm) => ({
                  ...pm,
                  base_pokemon_id: pm.pokemon_id,
                }));
              }}
            >
              Option
            </Checkbox>
          </div>
        </div>
        <Line />
        <div className="flex items-center overflow-visible h-10">
          <p className="font-medium w-1/2">Pokemon Type</p>
          <button
            className="flex h-7 w-7 rounded-full justify-center items-center bg-gray-300 cursor-pointer"
            onClick={(e) => {
              setShowPokemonTypes(!showPokemonTypes);
            }}
            type="button"
          >
            <PlusIcon className="h-5" />
          </button>
          <div className="relative overflow-visible self-start">
            <div
              className={clsx(
                "flex flex-col overflow-y-scroll z-10 scrollbar w-28 ml-4 h-40 border border-gray-400 py-1 absolute",
                {
                  invisible: !showPokemonTypes,
                }
              )}
            >
              {PokemonTypes.map((type, i) => {
                return (
                  <div
                    key={type}
                    className={clsx(
                      "bg-white hover:bg-gray-200 cursor-pointer flex justify-start items-center pl-2 gap-x-1 pb-2",
                      { "pb-0": i == PokemonTypes.length - 1 }
                    )}
                    onClick={(e) => {
                      if (
                        !createdPokemon.pokemon_types.find((v) => v === type)
                      ) {
                        setCreatedPokemon((v) => ({
                          ...v,
                          pokemon_types: [...v.pokemon_types, type],
                        }));
                      }

                      setShowPokemonTypes(false);
                    }}
                  >
                    <Image
                      src={pokemonType[type]}
                      alt={""}
                      width={0}
                      height={0}
                      className="w-5 h-5"
                    />
                    <span>{type}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-x-2 pl-3 overflow-x-scroll w-80">
              {createdPokemon.pokemon_types.map((v) => {
                return (
                  <div
                    key={v}
                    className="rounded-xl border border-gray-200 bg-gray-100 min-w-32 w-32 px-2 h-10 flex items-center justify-center gap-x-1 hover:bg-gray-200 cursor-pointer"
                    onClick={(e) => {
                      setCreatedPokemon((pm) => ({
                        ...pm,
                        pokemon_types: pm.pokemon_types.filter(
                          (type) => type != v
                        ),
                      }));
                    }}
                  >
                    <Image
                      src={pokemonType[v]}
                      alt={""}
                      width={0}
                      height={0}
                      className="w-5 h-5"
                    />
                    <p>{v}</p>
                    <XCircleIcon className="h-6 w-6" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Line />
        <div className="flex items-center">
          <p className="font-medium w-1/2">Pokemon Ability</p>
          <div className="rounded-xl flex items-center pr-10 gap-x-2 h-10">
            <input
              type="text"
              value={pokemonAbility}
              className="h-10 px-2 outline-none w-28 border border-gray-400 rounded-md"
              onChange={(e) => {
                setPokemonAbility(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  setCreatedPokemon((pm) => ({
                    ...pm,
                    pokemon_abilities: [
                      pokemonAbility,
                      ...pm.pokemon_abilities,
                    ],
                  }));
                  setPokemonAbility("");
                }
              }}
            />
            <div className="flex w-72 gap-x-2 overflow-x-scroll">
              {createdPokemon.pokemon_abilities.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-center items-center px-2 h-8 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200"
                    onClick={(e) => {
                      setCreatedPokemon((pm) => ({
                        ...pm,
                        pokemon_abilities: pm.pokemon_abilities.filter(
                          (item, index) => index != i
                        ),
                      }));
                    }}
                  >
                    {v} <XCircleIcon className="h-full w-auto p-2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Line />
        <div className="flex justify-end">
          <Link
            type="submit"
            className="bg-blue-500 rounded-md py-2 px-3"
            onClick={(e) => {
              createPokemon(createdPokemon);
            }}
            href="/pokemon/pokedex"
          >
            Submit
          </Link>
        </div>
      </div>
      {showSpriteOAModal && (
        <Modal setShowModal={setShowSpriteOAModal}>
          <input
            type="text"
            className="w-full h-10 rounded-md px-2 border border-gray-400"
            onChange={(e) => {
              setCreatedPokemon((v) => ({
                ...v,
                sprite_front_default_official_artwork_url: e.target.value,
              }));
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                setShowSpriteOAModal(false);
              }
            }}
          />
        </Modal>
      )}
      {showSpriteShowdownModal && (
        <Modal setShowModal={setShowSpriteShowdownModal}>
          <input
            type="text"
            className="w-full h-10 rounded-md px-2 border border-gray-400"
            onChange={(e) => {
              setCreatedPokemon((v) => ({
                ...v,
                sprite_front_default_showdown_url: e.target.value,
              }));
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                setShowSpriteShowdownModal(false);
              }
            }}
          />
        </Modal>
      )}
    </>
  );
}

function Line() {
  return <hr className="h-px my-4 bg-gray-200 border-0"></hr>;
}

function InputNumber({ onChange }: { onChange: (value: string) => void }) {
  return (
    <div className="flex items-center">
      <input
        type="number"
        className="w-28 h-10 rounded-md px-2 border border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
