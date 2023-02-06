import Footer from '../DefaultLayout/Footer';
import Header from '../DefaultLayout/Header';
import styles from './SideBarLayout.module.css';
import SideBar from './SideBar';
import { DownIcon, FilterIcon } from '../../components/Icons';
import Menu from '../../components/Popper/Menu';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import FilterByBrand from '../../components/Filters/FilterByBrand';
import FilterByGender from '../../components/Filters/FilterByGender';
import FilterByStyle from '../../components/Filters/FilterByStyle';
import { getProductFailure, getProductStart, getProductSuccess } from '../../redux/productSlice';
import { publicRequest } from '../../utils/request';
import FilterByFeature from '../../components/Filters/FilterByFeature';
import FilterByPrice from '../../components/Filters/FilterByPrice';
import ColoursWay from './SideBar/ColoursWay/ColoursWay';
function SideBarLayout({ children }) {
    const Options = [
        { title: 'Price : Low - High', value: 'asc' },
        { title: 'Price : High - Low', value: 'desc' },
    ];

    const [showFilter, setShowFilter] = useState(true);
    const [showFilterMoblie, setShowFilterMobile] = useState(false);

    const handleShowFilter = (value) => {
        value ? setShowFilter(false) : setShowFilter(true);
    };

    const toggleShow = () => setShowFilterMobile((value) => !value);

    //
    const dispatch = useDispatch();
    const [sort, setSort] = useState({ sort: 'currentPrice', order: 'desc' });
    const [filterColor, setFilterColor] = useState([]);
    const [filterGender, setFilterGender] = useState([]);
    const [filterBrand, setFilterBrand] = useState([]);
    const [filterStyle, setFilterStyle] = useState([]);
    const [filterFeature, setFilterFeature] = useState([]);
    const [range, setRange] = useState({ min: 0, max: 10000000 });
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getAllProducts = async () => {
            dispatch(getProductStart());
            try {
                const res = await publicRequest.get(
                    `/products?page=${page}&sort=${sort.sort},${
                        sort.order
                    }&gender=${filterGender.toString()}&brand=${filterBrand.toString()}&style=${filterStyle.toString()}&color=${filterColor.toString()}&feature=${filterFeature.toString()}&range=${range}&search=${search}`,
                );
                dispatch(getProductSuccess(res.data));
            } catch (err) {
                dispatch(getProductFailure());
            }
        };

        getAllProducts();
    }, [sort, filterColor, filterGender, filterBrand, filterStyle, filterFeature, range, page, search, dispatch]);

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
                                    <Button onClick={toggleShow} outline>
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
            <div className={clsx(styles.filterTable, { [styles.show]: showFilterMoblie })}>
                <div className={styles.tableContent}>
                    <FilterByGender
                        gender={listProduct.gender ? listProduct.gender : []}
                        filterGender={filterGender}
                        setFilterGender={setFilterGender}
                    />
                    <FilterByBrand
                        brand={listProduct.brand ? listProduct.brand : []}
                        filterBrand={filterBrand}
                        setFilterBrand={setFilterBrand}
                    />
                    <FilterByStyle
                        style={listProduct.style ? listProduct.style : []}
                        filterStyle={filterStyle}
                        setFilterStyle={setFilterStyle}
                    />
                    <FilterByFeature
                        feature={listProduct.feature ? listProduct.feature : []}
                        filterFeature={filterFeature}
                        setFilterFeature={setFilterFeature}
                    />
                    <FilterByPrice setRange={setRange} />
                    <ColoursWay
                        colours={listProduct.color ? listProduct.color : []}
                        filterColor={filterColor}
                        setFilterColor={setFilterColor}
                    />
                    <div className={styles.actions}>
                        <div className={styles.action}>
                            <div onClick={toggleShow} className={styles.cancel}>
                                <p>Close</p>
                            </div>
                        </div>
                        <div onClick={toggleShow} className={styles.action}>
                            <div className={styles.apply}>
                                <p>Apply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarLayout;
