import clsx from 'clsx';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DownIcon, UpIcon } from '../Icons';

import styles from './Filters.module.css';
function FilterByPrice(setRange) {
    const data = [
        { title: 'Under 1,000,000đ', data: { min: 0, max: 1000000 } },
        { title: '1,000,000đ to 4,000,000đ', data: { min: 1000000, max: 4000000 } },
        { title: 'Over 4,000,000đ', data: { min: 4000000, max: 10000000 } },
    ];
    const [hideFilter, setHideFilter] = useState(false);

    const [search, setSearch] = useSearchParams();

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
    };

    const handleChange = (e) => {
        // const value = e.target.value;
        // const isChecked = e.target.checked;
        // setRange(isChecked ? value : { min: 0, max: 10000000 });
    };

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
                        <input
                            className={styles.cb}
                            type="checkbox"
                            id={index}
                            value={item.data}
                            onChange={handleChange}
                        />
                        <label htmlFor={index}>{item.title}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterByPrice;
