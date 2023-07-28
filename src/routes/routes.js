import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Collections from '../pages/Collections';
import config from '../config';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import Men from '../pages/Men/index';
import Women from '../pages/Women/index';
import Sale from '../pages/Sale/index';
import Checkout from '../pages/Checkout';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUp from '../pages/Login/SignUp';
import Success from '../pages/Success';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders/Orders';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.details, component: Details },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.resgister, component: SignUp, layout: null },
    { path: config.routes.loading, component: LoadingPage, layout: null },
    { path: config.routes.error404, component: ErrorPage, layout: null },
    { path: config.routes.collections, component: Collections, layout: 'sidebar' },
    { path: config.routes.men, component: Men },
    { path: config.routes.women, component: Women },
    { path: config.routes.sale, component: Sale },
    { path: config.routes.success, component: Success, layout: null },
    { path: config.routes.orders, component: Orders },
];

const privateRoutes = [
    { path: config.routes.cart, component: Cart },
    { path: config.routes.wishlist, component: Wishlist },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.checkout, component: Checkout },
];

const getRoutes = (isLoggedIn) => {
    if (isLoggedIn) {
        return [...publicRoutes, ...privateRoutes];
    } else {
        return publicRoutes;
    }
};

export { getRoutes };
