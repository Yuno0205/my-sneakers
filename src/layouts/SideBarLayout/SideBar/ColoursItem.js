import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon, DownIcon, UpIcon } from '../../../components/Icons';
import styles from './SideBar.module.css';
function ColoursItem() {
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
                        <div className={styles.colorContent}>
                            <div className={clsx(styles.color, styles.isPurple)}></div>
                            <span className={styles.colorName}>Purple</span>
                        </div>
                        <div className={styles.colorContent}>
                            <div className={clsx(styles.color, styles.isBlack)}></div>
                            <span className={styles.colorName}>Black</span>
                        </div>
                        <div className={styles.colorContent}>
                            <div className={clsx(styles.color, styles.isWhite)}></div>
                            <span className={styles.colorName}>White</span>
                        </div>
                        <div className={styles.colorContent}>
                            <div className={clsx(styles.color, styles.isRed)}></div>
                            <span className={styles.colorName}>Red</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColoursItem;
