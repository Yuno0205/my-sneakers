import { useEffect, useRef, useState } from 'react';
import {
    BarsIcon,
    CartIcon,
    ClearIcon,
    HeartIcon,
    LogoutIcon,
    NextIcon,
    OrdersIcon,
    SettingIcon,
    UserIcon,
} from '../../../components/Icons';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import images from '../../../assets/images';
import styles from './Header.module.css';
import { Wrapper as PopperWrapper } from '../../../components/Popper/Wrapper';
import SuggestProducts from '../../../components/SuggestProducts';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu';
import Search from '../../../components/Search';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, loginFailure, loginSuccess, selectUserToken } from '../../../redux/userSlice';
import Image from '../../../components/Image/Image';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getCartInfo } from '../../../redux/cartSlice';
import Skeleton from 'react-loading-skeleton';

const logout = () => {
    console.log('Logout');
    window.open('https://jorrkan-api.onrender.com/api/auth/logout', '_self');
};

const MenuItems = [
    { icon: <UserIcon />, title: 'My profile', to: '/profile' },
    { icon: <OrdersIcon />, title: 'My Orders', to: '/orders' },
    { icon: <SettingIcon />, title: 'Setting', to: '/login' },
    { icon: <LogoutIcon />, title: 'Log out', onClick: () => logout() },
];

const Header = () => {
    const [showResults, setShowResults] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [displayCoating, setDisplayCoating] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const { isFetching, error } = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const userToken = useSelector(selectUserToken);

    const notify = (content) => toast.error(content);

    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    // useEffect(() => {
    //     if (userToken) {
    //         dispatch(getCartInfo(userToken));
    //     }
    // }, [dispatch, userToken]);

    const handleShowResults = (childData) => {
        setShowResults(childData);
    };

    const handleShowCoating = (childData) => {
        setDisplayCoating(childData);
    };

    const handleSearchValue = (childData) => {
        setSearchValue(childData);
    };

    const handleSearchResults = (childData) => {
        setSearchResults(childData);
    };

    const toggleShow = () => setShow((value) => !value);

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div
                    className={clsx(styles.logo, {
                        [styles.hide]: showResults,
                    })}
                >
                    <Link to={config.routes.home} className={styles.logoLink}>
                        <img src={images.logo} width="110" alt="Jorkan - Running Sports Shoes " />
                    </Link>
                </div>
                <div className={styles.nav}>
                    <div
                        className={clsx(styles.menu, {
                            [styles.menuHide]: showResults,
                        })}
                    >
                        <ul>
                            <li>
                                <Link className={styles.underline} to="/collections">
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link to="/men" className={styles.underline}>
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link to="/women" className={styles.underline}>
                                    Women
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.underline}>Kid</Link>
                            </li>

                            <li>
                                <Link to="/sale" className={styles.underline}>
                                    Sale
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Search */}

                    <Search
                        handleShowResults={handleShowResults}
                        handleShowCoating={handleShowCoating}
                        handleSearchValue={handleSearchValue}
                        handleSearchResults={handleSearchResults}
                        showResults={showResults}
                        searchValue={searchValue}
                        setLoading={setLoading}
                    />
                </div>
                <div
                    className={clsx(styles.action, {
                        [styles.hideActions]: showResults,
                    })}
                >
                    {user && user.user ? (
                        <>
                            <Tippy delay={[0, 50]} content="Wish list" placement="bottom">
                                <div>
                                    <Button
                                        className={styles.wishlist}
                                        to="/wishlist"
                                        icon={<HeartIcon />}
                                        circle
                                    ></Button>
                                </div>
                            </Tippy>

                            <Tippy interactive delay={[0, 50]} content="Your cart" placement="bottom">
                                <div className={styles.place}>
                                    <Button to="/cart" icon={<CartIcon />} circle></Button>
                                    <span className={clsx(styles.badge)}>{cart.totalCount}</span>
                                </div>
                            </Tippy>
                            <Menu items={MenuItems}>
                                {isFetching ? (
                                    <Skeleton circle width={'35px'} height={'35px'} />
                                ) : (
                                    <Image className={styles.userAvatar} src={user.user.image} alt="avatar"></Image>
                                )}
                            </Menu>
                            <div onClick={toggleShow} className={styles.bars}>
                                <BarsIcon />
                            </div>
                        </>
                    ) : (
                        <>
                            <Button outline>
                                <Link to="/login">Log in</Link>
                            </Button>
                        </>
                    )}
                </div>

                <div
                    className={clsx(styles.cancel, {
                        [styles.showCancel]: showResults,
                    })}
                >
                    <button
                        onClick={() => {
                            setShowResults(false);
                            setDisplayCoating(false);
                            setSearchValue('');
                        }}
                    >
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
            <div
                className={clsx({
                    [styles.coating]: displayCoating,
                })}
            ></div>
            {showResults ? (
                <SuggestProducts
                    searchResults={searchResults}
                    setShowResults={handleShowResults}
                    setDisplayCoating={handleShowCoating}
                    loading={loading}
                />
            ) : (
                <></>
            )}
            <div className={clsx(styles.mobileMenu, { [styles.show]: show })}>
                <div onClick={toggleShow} className={styles.btnClose}>
                    <ClearIcon />
                </div>
                <div className={styles.content}>
                    <Link className={styles.menuMobileItem}>
                        <span>Hi , {user && user.user ? user.user.displayName : 'Guest'}</span>
                    </Link>
                    <Link className={styles.menuMobileItem}>
                        <span>New and Featured</span>
                        <NextIcon width="2.4rem" height="2.4rem" />
                    </Link>
                    <Link to="/collections" className={styles.menuMobileItem}>
                        <span>Collections</span>
                        <NextIcon width="2.4rem" height="2.4rem" />
                    </Link>
                    <Link to="/men" className={styles.menuMobileItem}>
                        <span>Men</span>
                        <NextIcon width="2.4rem" height="2.4rem" />
                    </Link>
                    <Link to="/women" className={styles.menuMobileItem}>
                        <span>Woman</span>
                        <NextIcon width="2.4rem" height="2.4rem" />
                    </Link>
                    <Link to="/sale" className={styles.menuMobileItem}>
                        <span>Sale</span>
                        <NextIcon width="2.4rem" height="2.4rem" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
