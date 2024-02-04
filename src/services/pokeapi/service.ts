import pokeapiClient from './client';

import { IPokemon } from '@/common/interface/pokemon';

const getPokemon = async (name: string): Promise<IPokemon> => {
	return await pokeapiClient
		.get(`/pokemon/${name}`)
		.then((res) => res.data)
		.catch((err) => err);
};

export const pokeapiService = {
	getPokemon,
};
