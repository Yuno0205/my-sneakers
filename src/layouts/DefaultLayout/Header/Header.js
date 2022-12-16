import { useEffect, useRef, useState } from 'react';
import { CartIcon, HeartIcon, LogoutIcon, OrdersIcon, SettingIcon, UserIcon } from '../../../components/Icons';
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
import { loginFailure, loginStart, loginSuccess } from '../../../redux/userSlice';

console.log(styles);

const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
};

const MenuItems = [
    { icon: <UserIcon />, title: 'My profile', to: '/login' },
    { icon: <OrdersIcon />, title: 'My Orders', to: '/login' },
    { icon: <SettingIcon />, title: 'Setting', to: '/login' },
    { icon: <LogoutIcon />, title: 'Log out', onClick: logout },
];

const Header = () => {
    const [showResults, setShowResults] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [displayCoating, setDisplayCoating] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cart = useSelector((state) => state.cart);

    // const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        const getUser = () => {
            dispatch(loginStart());
            fetch('http://localhost:5000/auth/login/success', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    dispatch(loginFailure());
                    throw new Error('authentication has been failed!');
                })
                .then((resObject) => {
                    dispatch(loginSuccess(resObject.user));
                })
                .catch((err) => {
                    dispatch(loginFailure());
                });
        };
        getUser();
    }, []);

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

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={styles.logo}>
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
                                <Link className={styles.underline}>Men</Link>
                            </li>
                            <li>
                                <Link className={styles.underline}>Women</Link>
                            </li>
                            <li>
                                <Link className={styles.underline}>Kid</Link>
                            </li>
                            <li>
                                <Link className={styles.underline} to="/collections">
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link to="./details" className={styles.underline}>
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
                    {user ? (
                        <>
                            <Tippy delay={[0, 50]} content="Wish list" placement="bottom">
                                <div>
                                    <Button to="/wishlist" icon={<HeartIcon />} circle></Button>
                                </div>
                            </Tippy>

                            <Tippy interactive delay={[0, 50]} content="Your cart" placement="bottom">
                                <div className={styles.place}>
                                    <Button to="/cart" icon={<CartIcon />} circle></Button>
                                    <span className={clsx(styles.badge)}>{cart.quantity}</span>
                                </div>
                            </Tippy>
                            <Menu items={MenuItems}>
                                <img className={styles.userAvatar} src={user.image} alt="avatar"></img>
                            </Menu>
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
        </header>
    );
};

export default Header;
