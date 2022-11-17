import { useRoutes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';

export const routeConfig = [
    {
        children: PublicRoutes,
    },
];

const RouterManager = () => {
    return useRoutes(routeConfig);
};

export default RouterManager;
