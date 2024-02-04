import axios from 'axios';

import { env } from '@/configs/env';

const pokeapiClient = axios.create({
	baseURL: `${env.pokeapi.baseUrl}`,
});

export default pokeapiClient;
