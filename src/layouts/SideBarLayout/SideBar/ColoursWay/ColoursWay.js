import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon, DownIcon, UpIcon } from '../../../../components/Icons';
import ColorItem from './ColorItem';
import styles from '../SideBar.module.css';
function ColoursWay({ colours, filterColor, setFilterColor }) {
    const [hideFilter, setHideFilter] = useState(false);

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
        console.log(hideFilter);
    };

    return (
        <div className={styles.filterItem}>
            <span onClick={() => handleFilter(hideFilter)} className={styles.spanTitle}>
                <div className={styles.filterTitle}>
                    <div className={styles.filterLabel}>Colours</div>
                    <div className={styles.filterIcon}>{hideFilter ? <DownIcon /> : <UpIcon />}</div>
                </div>
            </span>
            <div
                className={clsx(styles.filterContent, styles.gender, {
                    [styles.hide]: hideFilter,
                })}
            >
                <div className={styles.filterInner}>
                    <div className={styles.colorsGroup}>
                        {colours?.map((item, index) => (
                            <ColorItem
                                filterColor={filterColor}
                                setFilterColor={setFilterColor}
                                key={index}
                                color={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColoursWay;
