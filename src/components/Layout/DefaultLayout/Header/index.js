import { useEffect, useState } from 'react';
import {
    CartIcon,
    ClearIcon,
    HeartIcon,
    LogoutIcon,
    OrdersIcon,
    SearchIcon,
    SettingIcon,
    UserIcon,
} from '../../../Icons';
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
import Search from '../../../Search';
import { Link } from 'react-router-dom';

console.log(styles);

const MenuItems = [
    { icon: <UserIcon />, title: 'My profile' },
    { icon: <OrdersIcon />, title: 'My Orders' },
    { icon: <SettingIcon />, title: 'Setting' },
    { icon: <LogoutIcon />, title: 'Log out' },
];

function Header() {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [displayCoating, setDisplayCoating] = useState(false);

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
                            <li>
                                <Link>Men</Link>
                            </li>
                            <li>
                                <Link>Women</Link>
                            </li>
                            <li>
                                <Link>Kid</Link>
                            </li>
                            <li>
                                <Link>Customise</Link>
                            </li>
                            <li>
                                <Link>Sale</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Search */}

                    <Search
                        setShowSuggestions={setShowSuggestions}
                        setDisplayCoating={setDisplayCoating}
                        showSuggestions={showSuggestions}
                    />
                </div>
                <div
                    className={clsx(styles.action, {
                        [styles.hideActions]: showSuggestions,
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
                            setDisplayCoating(false);
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
            {showSuggestions ? (
                <SuggestProducts setShowSuggestions={setShowSuggestions} setDisplayCoating={setDisplayCoating} />
            ) : (
                <></>
            )}
        </header>
    );
}

export default Header;
