import Error from '../components/Common/Error';
import Brands from '../pages/Brands';
import CarDetail from '../pages/Detail/CarDetail';
import Home from '../pages/Home';

export const PublicRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/brands',
        element: <Brands />,
    },
    {
        path: '/car-detail/:key',
        element: <CarDetail />,
    },
    {
        path: '401',
        element: <p>No Authorization Found</p>,
    },
    {
        path: '*',
        element: <Error />,
    },
];
