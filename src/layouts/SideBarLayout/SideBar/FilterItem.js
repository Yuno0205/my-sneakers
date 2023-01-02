import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon, DownIcon, UpIcon } from '../../../components/Icons';
import ItemContent from './ItemContent';
import styles from './SideBar.module.css';
function FilterItem({ title, content, handleSetValueFilter }) {
    const [hideFilter, setHideFilter] = useState(false);
    const [filterValue, setFilterValue] = useState({});

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        const name = e.target.name;

        setFilterValue((prev) => {
            console.log(prev);
            return { ...prev, [name]: e.target.value };
        });

        // setFilterValue(isChecked ? [...filterValue, value] : filterValue.filter((item) => item !== value));
    };

    console.log(filterValue);

    return (
        <div className={styles.filterItem}>
            <span onClick={() => handleFilter(hideFilter)} className={clsx(styles.spanTitle, styles.gender)}>
                <div className={styles.filterTitle}>
                    <div className={styles.filterLabel}>{title}</div>
                    <div className={styles.filterIcon}>{hideFilter ? <DownIcon /> : <UpIcon />}</div>
                </div>
            </span>
            <div
                className={clsx(styles.filterContent, styles.gender, {
                    [styles.hide]: hideFilter,
                })}
            >
                {content?.map((item, index) => (
                    <div className={styles.inputItem} key={index}>
                        <input
                            name={title}
                            className={styles.cb}
                            type="checkbox"
                            id={index}
                            value={item}
                            onChange={handleChange}
                        />
                        <label htmlFor={index}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterItem;
