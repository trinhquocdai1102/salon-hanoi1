import Error from '../components/Common/Error';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import CarDetail from '../pages/Detail/CarDetail';
import Home from '../pages/Home';
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
        element: <AboutUs />,
    },
    {
        path: '/contact',
        element: <Contact />,
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
