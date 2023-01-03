import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon, DownIcon, UpIcon } from '../../../components/Icons';
import styles from './SideBar.module.css';
function SizeItem() {
    const [hideFilter, setHideFilter] = useState(false);

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
    };
    return (
        <div className={styles.filterItem}>
            <span onClick={() => handleFilter(hideFilter)} className={clsx(styles.spanTitle, styles.price)}>
                <div className={styles.filterTitle}>
                    <div className={styles.filterLabel}>Size</div>
                    <div className={styles.filterIcon}>{hideFilter ? <DownIcon /> : <UpIcon />}</div>
                </div>
            </span>
            <div
                className={clsx(styles.filterContent, styles.gender, {
                    [styles.hide]: hideFilter,
                })}
            >
                <div className={styles.filterInner}>
                    <div className={styles.itemsGroup}>
                        <div className={styles.sizeGroup}>
                            <button className={styles.sizeItem}>
                                <span className={styles.sizeValue}>34</span>
                            </button>
                            <button className={styles.sizeItem}>
                                <span className={styles.sizeValue}>35</span>
                            </button>
                            <button className={styles.sizeItem}>
                                <span className={styles.sizeValue}>36</span>
                            </button>
                            <button className={styles.sizeItem}>
                                <span className={styles.sizeValue}>37</span>
                            </button>
                            <button className={styles.sizeItem}>
                                <span className={styles.sizeValue}>38</span>
                            </button>
                            <button className={styles.sizeItem}>
                                <span className={styles.sizeValue}>39</span>
                            </button>
                            <button className={styles.sizeItem}>
                                <span className={styles.sizeValue}>40</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SizeItem;
