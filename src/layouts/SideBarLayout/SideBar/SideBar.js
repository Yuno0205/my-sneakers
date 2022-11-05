import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon, DownIcon, UpIcon } from '../../../components/Icons/Icons';
import styles from './SideBar.module.css';

function Sidebar({ showFilter }) {
    const [hideFilter, setHideFilter] = useState(false);

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
        console.log(hideFilter);
    };
    return (
        <div
            className={clsx(styles.wrapper, {
                [styles.hide]: !showFilter,
            })}
        >
            <div className={styles.container}>
                <div className={styles.contentCover}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.content}>
                            <div className={styles.categories}>
                                <div className={styles.categoriesContent}>
                                    <div className={styles.categoriesItem}>Life Style</div>
                                    <div className={styles.categoriesItem}>Jordan</div>
                                    <div className={styles.categoriesItem}>Running</div>
                                    <div className={styles.categoriesItem}>Basketball</div>
                                    <div className={styles.categoriesItem}>Football</div>
                                    <div className={styles.categoriesItem}>Tenis</div>
                                    <div className={styles.categoriesItem}>Athletics</div>
                                    <div className={styles.categoriesItem}>Traning & Gym</div>
                                </div>
                            </div>

                            <div className={styles.filter}>
                                <div className={styles.filterWrapper}>
                                    <div className={styles.filterItem}>
                                        <span onClick={() => handleFilter(hideFilter)} className={styles.spanTitle}>
                                            <div className={styles.filterTitle}>
                                                <div className={styles.filterLabel}>Gender</div>
                                                <div className={styles.filterIcon}>
                                                    {hideFilter ? <DownIcon /> : <UpIcon />}
                                                </div>
                                            </div>
                                        </span>
                                        <div
                                            className={clsx(styles.filterContent, styles.gender, {
                                                [styles.hide]: hideFilter,
                                            })}
                                        >
                                            <div className={styles.filterInner}>
                                                <div className={styles.itemsGroup}>
                                                    <div className={styles.itemContent}>
                                                        <div className={styles.checkbox}>
                                                            <div className={styles.checkboxIcon}>
                                                                <CheckIcon />
                                                            </div>
                                                        </div>
                                                        <span>Male</span>
                                                    </div>

                                                    <div className={styles.itemContent}>
                                                        <div className={styles.checkbox}>
                                                            <div className={styles.checkboxIcon}>
                                                                <CheckIcon />
                                                            </div>
                                                        </div>
                                                        <span>Female</span>
                                                    </div>

                                                    <div className={styles.itemContent}>
                                                        <div className={styles.checkbox}>
                                                            <div className={styles.checkboxIcon}>
                                                                <CheckIcon />
                                                            </div>
                                                        </div>
                                                        <span>Unisex</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.filterItem}>
                                        <span onClick={() => handleFilter(hideFilter)} className={styles.spanTitle}>
                                            <div className={styles.filterTitle}>
                                                <div className={styles.filterLabel}>Shop by Price</div>
                                                <div className={styles.filterIcon}>
                                                    {hideFilter ? <DownIcon /> : <UpIcon />}
                                                </div>
                                            </div>
                                        </span>
                                        <div
                                            className={clsx(styles.filterContent, styles.price, {
                                                [styles.hide]: hideFilter,
                                            })}
                                        >
                                            <div className={styles.filterInner}>
                                                <div className={styles.itemsGroup}>
                                                    <div className={styles.itemContent}>
                                                        <div className={styles.checkbox}>
                                                            <div className={styles.checkboxIcon}>
                                                                <CheckIcon />
                                                            </div>
                                                        </div>
                                                        <span>Under 1,000,000đ</span>
                                                    </div>

                                                    <div className={styles.itemContent}>
                                                        <div className={styles.checkbox}>
                                                            <div className={styles.checkboxIcon}>
                                                                <CheckIcon />
                                                            </div>
                                                        </div>
                                                        <span>1,000,000đ to 2,000,000đ</span>
                                                    </div>

                                                    <div className={styles.itemContent}>
                                                        <div className={styles.checkbox}>
                                                            <div className={styles.checkboxIcon}>
                                                                <CheckIcon />
                                                            </div>
                                                        </div>
                                                        <span>Over 4,000,000đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.filterItem}>
                                        <span onClick={() => handleFilter(hideFilter)} className={styles.spanTitle}>
                                            <div className={styles.filterTitle}>
                                                <div className={styles.filterLabel}>Colours</div>
                                                <div className={styles.filterIcon}>
                                                    {hideFilter ? <DownIcon /> : <UpIcon />}
                                                </div>
                                            </div>
                                        </span>
                                        <div className={styles.filterContent}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
