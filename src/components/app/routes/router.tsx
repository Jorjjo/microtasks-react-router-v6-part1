import { createBrowserRouter, redirect } from 'react-router';
import { App } from '../App';
import { PageOne } from '../../pages/Adidas';
import { PageTwo } from '../../pages/Puma';
import { PageThree } from '../../pages/Abibas';
import { SneakerModel } from '../../pages/SneakerModel';
import { Prices } from '../../pages/Prices';
import { Error404 } from '../../pages/Error404';
import { PATH } from './paths';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                loader: () => redirect(PATH.ADIDAS),
            },
            {
                path: PATH.ADIDAS,
                Component: PageOne,
            },

            {
                path: PATH.PUMA,
                Component: PageTwo,
            },

            {
                path: PATH.ABIBAS,
                Component: PageThree,
            },

            {
                path: '/:model/:id',
                Component: SneakerModel,
            },

            {
                path: PATH.PRICES,
                Component: Prices,
            },

            {
                path: '*',
                Component: Error404,
            },
        ],
    },
]);
