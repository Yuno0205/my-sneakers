import Footer from '../DefaultLayout/Footer';
import Header from '../DefaultLayout/Header';
import styles from './SideBarLayout.module.css';
import SideBar from './SideBar';
import { DownIcon, FilterIcon } from '../../components/Icons';
import Menu from '../../components/Popper/Menu';
function SideBarLayout({ children }) {
    const Options = [
        { title: 'Price : Low - High' },
        { title: 'Price : High - Low' },
        { title: 'Featured' },
        { title: 'Newest' },
    ];
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
                                <span className={styles.itemCount}>(418)</span>
                            </h1>
                            <nav className={styles.headerNav}>
                                <button className={styles.filterBtn}>
                                    <span className={styles.filterText}>Hide Filter</span>
                                    <FilterIcon />
                                </button>
                                <div className={styles.sort}>
                                    <Menu items={Options}>
                                        <div className={styles.dropdown}>
                                            <button className={styles.dropdownBtn}>
                                                <span>Sort</span>
                                                <div className={styles.downIcon}>
                                                    <DownIcon width="2rem" height="2rem" />
                                                </div>
                                            </button>
                                        </div>
                                    </Menu>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
                <div className={styles.offsetWall}></div>
                <div className={styles.content}>
                    <SideBar />
                    <div className={styles.results}>{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SideBarLayout;
