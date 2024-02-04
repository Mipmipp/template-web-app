import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IPokemon } from '@/common/interface/pokemon';
import { pokeapi } from '@/services';

export default function Pokemon() {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState<IPokemon | null>(null);

	useEffect(() => {
		pokeapi.getPokemon(name as string).then((res) => {
			setPokemon(res);
		});
	}, []);

	return (
		<div>
			{/* data-test? https://docs.cypress.io/guides/references/best-practices */}
			<h1 data-test="pokemon-name">Pokemon {pokemon?.name}</h1>
		</div>
	);
}
