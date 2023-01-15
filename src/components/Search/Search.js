import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import axios from 'axios';

import styles from './Search.module.css';
import { ClearIcon, SearchIcon } from '../Icons';
import SuggestProduct from '../SuggestProducts';
import { useDebounce } from '../../hooks';
import * as searchSevices from '../../services/searchService';

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

    const deBounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!deBounce.trim()) {
            handleSearchResults([]);
            return;
        }
        const fetchAPI = async () => {
            setLoading(true);

            const results = await searchSevices.search(deBounce);
            handleSearchResults(results);

            setLoading(false);
        };
        fetchAPI();
    }, [deBounce]);

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
