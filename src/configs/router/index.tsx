import { createBrowserRouter } from 'react-router-dom';

import Root from '@/common/Root';
import Home from '@/features/home/Home';
import Pokemon from '@/features/pokemon/Pokemon';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/pokemon/:name',
				element: <Pokemon />,
			},
		],
	},
]);

export default router;
