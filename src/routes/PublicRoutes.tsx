import Error from '../components/Common/Error';
import Advise from '../pages/Advise';
import Brands from '../pages/Brands';
import CarDetail from '../pages/Detail/CarDetail';
import Home from '../pages/Home';
import ListCar from '../pages/ListCar';
import Search from '../pages/Search';

export const PublicRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/search',
        element: <Search />,
    },
    {
        path: '/brands',
        element: <Brands />,
    },
    {
        path: '/list-car',
        element: <ListCar />,
    },
    {
        path: '/advise',
        element: <Advise />,
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
