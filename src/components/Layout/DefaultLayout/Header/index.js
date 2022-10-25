import { useEffect, useState } from 'react';
import { CartIcon, HeartIcon, LogoutIcon, OrdersIcon, SearchIcon, SettingIcon, UserIcon } from '../../../Icons';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import images from '../../../../assets/images';
import styles from './Header.module.css';
import { Wrapper as PopperWrapper } from '../../../Popper';
import SuggestProducts from '../../../SuggestProducts';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

console.log(styles);

const MenuItems = [
    { icon: <UserIcon />, title: 'My profile' },
    { icon: <OrdersIcon />, title: 'My Orders' },
    { icon: <SettingIcon />, title: 'Setting' },
    { icon: <LogoutIcon />, title: 'Log out' },
];

function Header() {
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);

    const currentUser = true;

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={images.logo} width="110" alt="Jorkan - Running Sports Shoes " />
                </div>
                <div className={styles.nav}>
                    <div
                        className={clsx(styles.menu, {
                            [styles.menuHide]: showSuggestions,
                        })}
                    >
                        <ul>
                            <li
                            // onMouseEnter={() => {
                            //     setShowSuggestions(true);
                            // }}
                            >
                                <a>Men</a>
                            </li>
                            <li>
                                <a>Women</a>
                            </li>
                            <li>
                                <a>Kid</a>
                            </li>
                            <li>
                                <a>Customise</a>
                            </li>
                            <li>
                                <a>Sale</a>
                            </li>
                            <li>
                                <a>Home</a>
                            </li>
                        </ul>
                    </div>

                    <div
                        onFocus={() => {
                            setShowSuggestions(true);
                        }}
                        onBlur={() => {
                            setShowSuggestions(false);
                        }}
                        className={clsx(styles.search, {
                            [styles.showSuggest]: showSuggestions,
                        })}
                    >
                        <input placeholder="Search ..." />
                        <button className={styles.searchBtn}>
                            <SearchIcon />
                        </button>
                        <button className={styles.clear}></button>
                    </div>
                </div>
                <div
                    className={clsx(styles.action, {
                        [styles.hideActions]: showSuggestions,
                    })}
                >
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Wish list" placement="bottom">
                                <Button to="/wishlist" icon={<HeartIcon />} circle></Button>
                            </Tippy>

                            <Tippy interactive delay={[0, 200]} content="Your cart" placement="bottom">
                                <Button to="/cart" icon={<CartIcon />} circle></Button>
                            </Tippy>
                            <Menu items={MenuItems}>
                                <img
                                    className={styles.userAvatar}
                                    src="https://api.duniagames.co.id/api/content/upload/file/473771541646215343.jpg"
                                ></img>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button outline>Log in</Button>{' '}
                        </>
                    )}
                </div>

                <div
                    className={clsx(styles.cancel, {
                        [styles.showCancel]: showSuggestions,
                    })}
                >
                    <button
                        onClick={() => {
                            setShowSuggestions(false);
                        }}
                    >
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
            {showSuggestions ? <SuggestProducts /> : <></>}
        </header>
    );
}

export default Header;
