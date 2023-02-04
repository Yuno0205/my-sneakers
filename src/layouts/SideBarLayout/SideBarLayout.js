import Footer from '../DefaultLayout/Footer';
import Header from '../DefaultLayout/Header';
import styles from './SideBarLayout.module.css';
import SideBar from './SideBar';
import { DownIcon, FilterIcon } from '../../components/Icons';
import Menu from '../../components/Popper/Menu';
import { useState } from 'react';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
function SideBarLayout({ children }) {
    const Options = [
        { title: 'Price : Low - High', value: 'asc' },
        { title: 'Price : High - Low', value: 'desc' },
    ];

    const [showFilter, setShowFilter] = useState(true);

    const handleShowFilter = (value) => {
        value ? setShowFilter(false) : setShowFilter(true);
    };

    const listProduct = useSelector((state) => state.product.products);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <div className={styles.offsetWall}></div>
                <div className={styles.headerCollections}>
                    <header className={styles.headerWrapper}>
                        <div className={styles.headerContent}>
                            <h1 className={styles.headerTitle}>
                                Men Shoes
                                <span className={styles.itemCount}>({listProduct.total})</span>
                            </h1>
                            <nav className={styles.headerNav}>
                                <button onClick={() => handleShowFilter(showFilter)} className={styles.filterBtn}>
                                    {showFilter ? (
                                        <span className={styles.filterText}>Hide Filter</span>
                                    ) : (
                                        <span className={styles.filterText}>Show Filter</span>
                                    )}
                                    <FilterIcon />
                                </button>
                                <div className={styles.sort}>
                                    <Menu trigger="click" items={Options}>
                                        <div className={styles.dropdown}>
                                            <button className={styles.dropdownBtn}>
                                                <span>Sort</span>
                                                <div className={styles.downIcon}>
                                                    <DownIcon width="2.4rem" height="2.4rem" />
                                                </div>
                                            </button>
                                        </div>
                                    </Menu>
                                </div>
                                <div className={styles.filterMobile}>
                                    <Button outline>
                                        <p>Filter</p>
                                        <FilterIcon />
                                    </Button>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
                <div className={styles.offsetWall}></div>
                <div className={styles.content}>
                    <SideBar showFilter={showFilter} />
                    <div className={styles.results}>{children}</div>
                </div>
            </div>
            <Footer />
            <div className={styles.filterTable}>
                <div className={styles.tableContent}>
                    <h1>Hehe</h1>
                </div>
            </div>
        </div>
    );
}

export default SideBarLayout;
