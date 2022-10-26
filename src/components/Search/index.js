import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Search.module.css';
import { ClearIcon, SearchIcon } from '../Icons';
import SuggestProduct from '../SuggestProducts';

function Search({ showSuggestions, setShowSuggestions, setDisplayCoating }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        fetch(' https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less')
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.data);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');

        inputRef.current.focus();
    };

    return (
        <div
            onFocus={() => {
                setShowSuggestions(true);
                setDisplayCoating(true);
            }}
            className={clsx(styles.search, {
                [styles.showSuggest]: showSuggestions,
            })}
        >
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Search ..."
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className={styles.searchBtn}>
                <SearchIcon />
            </button>
            {!!searchValue && (
                <button className={clsx(styles.clear)} onClick={handleClear}>
                    <ClearIcon />
                </button>
            )}
        </div>
    );
}

export default Search;
