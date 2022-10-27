import Home from '../pages/Home';
import Products from '../pages/Products';
import Details from '../pages/Details';
import Login from '../pages/Login';
import routesConfig from '../config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.products, component: Products },
    { path: routesConfig.details, component: Details },
    { path: routesConfig.login, component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
