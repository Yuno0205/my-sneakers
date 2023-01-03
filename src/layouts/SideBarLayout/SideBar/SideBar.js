import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon, DownIcon, UpIcon } from '../../../components/Icons/Icons';
import ColoursWay from './ColoursWay/ColoursWay';
import FilterItem from './FilterItem';
import styles from './SideBar.module.css';
import SizeItem from './SizeItem';

function Sidebar({ showFilter }) {
    const [filterValue, setFilterValue] = useState({});

    console.log(filterValue);

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
                                    <FilterItem
                                        filterValue={filterValue}
                                        setFilterValue={setFilterValue}
                                        title="Gender"
                                        content={['Male', 'Female', 'Unisex']}
                                    />
                                    <FilterItem
                                        filterValue={filterValue}
                                        setFilterValue={setFilterValue}
                                        title="Brand"
                                        content={['Jordan', 'Nike', 'Puma', 'Adidas']}
                                    />
                                    <FilterItem
                                        filterValue={filterValue}
                                        setFilterValue={setFilterValue}
                                        title="Shop by price"
                                        content={['Under 1,000,000đ', '1,000,000đ to 4,000,000đ', 'Over 4,000,000đ']}
                                    />
                                    <ColoursWay />
                                    <SizeItem />
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
