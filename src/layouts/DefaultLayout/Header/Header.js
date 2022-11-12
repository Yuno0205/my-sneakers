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

console.log(styles);

const MenuItems = [
    { icon: <UserIcon />, title: 'My profile', to: '/login' },
    { icon: <OrdersIcon />, title: 'My Orders', to: '/login' },
    { icon: <SettingIcon />, title: 'Setting', to: '/login' },
    { icon: <LogoutIcon />, title: 'Log out', to: '/login' },
];

function Header() {
    const [showResults, setShowResults] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [displayCoating, setDisplayCoating] = useState(false);
    const [loading, setLoading] = useState(false);

    const [hideHeader, setHideHeader] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', function () {
    //         if (window.scrollY > 100) {
    //             setHideHeader(true);
    //             console.log('hide');
    //         }
    //     });
    // }, []);

    const currentUser = true;

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
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Wish list" placement="bottom">
                                <div>
                                    <Button to="/wishlist" icon={<HeartIcon />} circle></Button>
                                </div>
                            </Tippy>

                            <Tippy interactive delay={[0, 50]} content="Your cart" placement="bottom">
                                <div className={styles.place}>
                                    <Button to="/cart" icon={<CartIcon />} circle></Button>
                                    <span className={clsx(styles.badge)}>12</span>
                                </div>
                            </Tippy>
                            <Menu items={MenuItems}>
                                <img
                                    className={styles.userAvatar}
                                    src="https://api.duniagames.co.id/api/content/upload/file/473771541646215343.jpg"
                                    alt="avatar"
                                ></img>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button outline>Log in</Button>
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
}

export default Header;
