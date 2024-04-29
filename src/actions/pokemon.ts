import { createPokemon } from "@/api/pokemons_api";
import { PokemonTypes } from "@/constants/pokemon_constants";
import { CreatedPokemon } from "@/models/created_pokemon";
import { z } from "zod";

const FormSchema = z.object({
  pokemon_id: z.number().gt(0,{message: "pokemon id should be greater than zero"}),
	name: z.string(),
	sprite_front_default_official_artwork_url: z.string().startsWith("https://raw.githubusercontent.com",{message: "url should be from github"}),
	sprite_front_default_showdown_url: z.string().startsWith("https://raw.githubusercontent.com",{message: "url should be from github"}),
	pokemon_types: z.array(z.enum(PokemonTypes)),
});

export async function createPokemonAction(req: CreatedPokemon) {
	const validatedFields = FormSchema.safeParse({
		pokemon_id: req.pokemon_id,
		name: req.name,
		sprite_front_default_official_artwork_url: req.sprite_front_default_official_artwork_url,
		sprite_front_default_showdown_url: req.sprite_front_default_showdown_url,
		pokemon_types: req.pokemon_types
	 })
	
	if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'validate failed',
    };
  }

	try {
		await createPokemon(req)
	} catch (error) {
		return {
			message: "create pokemon failed"
		}
	}
}