import clsx from 'clsx';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DownIcon, UpIcon } from '../Icons';

import styles from './Filters.module.css';
function FilterByPrice() {
    const data = ['Under 1,000,000đ', '1,000,000đ to 4,000,000đ', 'Over 4,000,000đ'];
    const [hideFilter, setHideFilter] = useState(false);
    const [filterValue, setFilterValue] = useState({});
    const [search, setSearch] = useSearchParams();

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        const name = e.target.name;

        setFilterValue(isChecked ? [...filterValue, value] : filterValue.filter((item) => item !== value));
    };

    console.log(filterValue);

    return (
        <div className={styles.filterItem}>
            <span onClick={() => handleFilter(hideFilter)} className={clsx(styles.spanTitle, styles.gender)}>
                <div className={styles.filterTitle}>
                    <div className={styles.filterLabel}>Shop by price</div>
                    <div className={styles.filterIcon}>{hideFilter ? <DownIcon /> : <UpIcon />}</div>
                </div>
            </span>
            <div
                className={clsx(styles.filterContent, styles.gender, {
                    [styles.hide]: hideFilter,
                })}
            >
                {data?.map((item, index) => (
                    <div className={styles.inputItem} key={index}>
                        <input className={styles.cb} type="checkbox" id={index} value={item} onChange={handleChange} />
                        <label htmlFor={index}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterByPrice;
