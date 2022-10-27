import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Search.module.css';
import { ClearIcon, SearchIcon } from '../Icons';
import SuggestProduct from '../SuggestProducts';

function Search({
    showResults,
    handleShowResults,
    handleShowCoating,
    handleSearchValue,

    handleSearchResults,
    searchValue,
    setLoading,
}) {
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            handleSearchResults([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                handleSearchResults(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        handleSearchValue('');

        inputRef.current.focus();
    };

    return (
        <div
            onFocus={() => {
                handleShowResults(true);
                handleShowCoating(true);
            }}
            className={clsx(styles.search, {
                [styles.showSuggest]: showResults,
            })}
        >
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Search ..."
                onChange={(e) => handleSearchValue(e.target.value)}
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
