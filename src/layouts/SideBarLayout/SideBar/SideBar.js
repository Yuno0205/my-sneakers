import clsx from 'clsx';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterByBrand from '../../../components/Filters/FilterByBrand';
import FilterByGender from '../../../components/Filters/FilterByGender';
import FilterByPrice from '../../../components/Filters/FilterByPrice';
import { CheckIcon, DownIcon, UpIcon } from '../../../components/Icons/Icons';
import ColoursWay from './ColoursWay/ColoursWay';
import FilterItem from './FilterItem';
import styles from './SideBar.module.css';
import SizeItem from './SizeItem';

function Sidebar({ showFilter }) {
    const [filters, setFilters] = useState({});
    const [search, setSearch] = useSearchParams();

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
                                    <FilterByGender search={search} setSearch={setSearch} />
                                    <FilterByBrand search={search} setSearch={setSearch} />
                                    <FilterByPrice search={search} setSearch={setSearch} />
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
