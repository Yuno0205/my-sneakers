import Home from '../pages/Home';
import Products from '../pages/Products';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Collections from '../pages/Collections';
import config from '../config';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import Checkout from '../pages/Checkout';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Products },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.wishlist, component: Wishlist },
    { path: config.routes.details, component: Details },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.loading, component: LoadingPage, layout: null },
    { path: config.routes.collections, component: Collections, layout: 'sidebar' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
