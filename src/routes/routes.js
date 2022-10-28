import Home from '../pages/Home';
import Products from '../pages/Products';
import Details from '../pages/Details';
import Login from '../pages/Login';
import config from '../config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Products },
    { path: config.routes.details, component: Details },
    { path: config.routes.login, component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
