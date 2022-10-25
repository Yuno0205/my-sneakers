import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import styles from './Search.module.css';
import { ClearIcon, SearchIcon } from '../Icons';

function Search({ showSuggestions, setShowSuggestions, setDisplayCoating }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);

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
            // onBlur={() => {
            //     setShowSuggestions(false);
            //     setDisplayCoating(false);
            // }}
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
