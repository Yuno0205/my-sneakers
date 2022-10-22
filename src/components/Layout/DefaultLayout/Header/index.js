import { useEffect, useState } from 'react';
import { CartIcon, HeartIcon, SearchIcon } from '../../../Icons';
import Tippy from '@tippyjs/react/headless';

import images from '../../../../assets/images';
import styles from './Header.module.css';
import { Wrapper as PopperWrapper } from '../../../Popper';
import SuggestProducts from '../../../SuggestProducts';
import clsx from 'clsx';

console.log(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);
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
                        onFocus={(e) => {
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
                    <a>
                        <HeartIcon />
                    </a>
                    <a>
                        <CartIcon />
                    </a>
                    <a>
                        <CartIcon />
                    </a>
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
            {/* {showSuggestions ? <SuggestProducts /> : <></>} */}
            <div
                className={clsx(styles.hideProducts, {
                    [styles.showProducts]: showSuggestions,
                })}
            >
                <SuggestProducts />
            </div>
        </header>
    );
}

export default Header;
