import {
    createBrowserRouter,
    Navigate,
    redirect,
    RouteObject,
} from 'react-router';
import { App } from '../App';
import { SneakerModel } from '../../pages/SneakerModel';
import { Prices } from '../../pages/Prices';
import { Error404 } from '../../pages/Error404';
import { PATH } from './paths';
import { PageAdidas } from '../../pages/Adidas';
import { PagePuma } from '../../pages/Puma';
import { PageAbibas } from '../../pages/Abibas';
import { ProtectedPage } from '../../pages/ProtectedPage';
import { ProtectedRoute } from './ProtectedRoute';
import { Auth } from '../../pages/Auth';

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        Component: PageAdidas,
    },

    {
        path: PATH.PUMA,
        Component: PagePuma,
    },

    {
        path: PATH.ABIBAS,
        Component: PageAbibas,
    },

    {
        path: PATH.MODEL,
        Component: SneakerModel,
    },
    {
        path: PATH.AUTH,
        Component: Auth,
    },
    {
        path: '*',
        Component: Error404,
    },
];

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        Component: ProtectedPage,
    },
    {
        path: PATH.PRICES,
        Component: Prices,
    },
];

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        errorElement: <Navigate to={PATH.ERROR} />,
        children: [
            {
                index: true,
                loader: () => redirect(PATH.ADIDAS),
            },
            {
                Component: ProtectedRoute,
                children: privateRoutes,
            },
            ...publicRoutes,
            //------------------With children---------------------//
            //less convinient since it can be a lot of protected pages
            // {
            //     path: PATH.PROTECTED,
            //     element: (
            //         <ProtectedRoute>
            //             <ProtectedPage />
            //         </ProtectedRoute>
            //     ),
            // },
        ],
    },
]);
