import clsx from 'clsx';
import { useState } from 'react';

import { DownIcon, UpIcon } from '../Icons';

import styles from './Filters.module.css';
function FilterByFeature({ filterFeature, setFilterFeature, feature }) {
    const [hideFilter, setHideFilter] = useState(false);

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setFilterFeature(isChecked ? [...filterFeature, value] : filterFeature.filter((item) => item !== value));
    };

    return (
        <div className={styles.filterItem}>
            <span onClick={() => handleFilter(hideFilter)} className={clsx(styles.spanTitle, styles.gender)}>
                <div className={styles.filterTitle}>
                    <div className={styles.filterLabel}>Features</div>
                    <div className={styles.filterIcon}>{hideFilter ? <DownIcon /> : <UpIcon />}</div>
                </div>
            </span>
            <div
                className={clsx(styles.filterContent, styles.gender, {
                    [styles.hide]: hideFilter,
                })}
            >
                {feature?.map((item, index) => (
                    <div className={styles.inputItem} key={index}>
                        <input className={styles.cb} type="checkbox" id={index} value={item} onChange={handleChange} />
                        <label htmlFor={index}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterByFeature;
