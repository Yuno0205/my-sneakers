import Home from '../pages/Home';
import Products from '../pages/Products';
import Details from '../pages/Details';
import Login from '../pages/Login';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/details', component: Details },
    { path: '/login', component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
