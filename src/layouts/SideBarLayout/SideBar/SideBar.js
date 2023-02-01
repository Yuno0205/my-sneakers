import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import FilterByBrand from '../../../components/Filters/FilterByBrand';
import FilterByFeature from '../../../components/Filters/FilterByFeature';
import FilterByGender from '../../../components/Filters/FilterByGender';
import FilterByPrice from '../../../components/Filters/FilterByPrice';
import FilterByStyle from '../../../components/Filters/FilterByStyle';
import { CheckIcon, DownIcon, UpIcon } from '../../../components/Icons/Icons';
import { getProductFailure, getProductStart, getProductSuccess } from '../../../redux/productSlice';
import { publicRequest } from '../../../utils/request';
import ColoursWay from './ColoursWay/ColoursWay';
import FilterItem from './FilterItem';
import styles from './SideBar.module.css';
import SizeItem from './SizeItem';

function Sidebar({ showFilter }) {
    const [filters, setFilters] = useState({});
    const dispatch = useDispatch();
    const [sort, setSort] = useState({ sort: 'price', order: 'desc' });
    const [filterColor, setFilterColor] = useState([]);
    const [filterGender, setFilterGender] = useState([]);
    const [filterBrand, setFilterBrand] = useState([]);
    const [filterStyle, setFilterStyle] = useState([]);
    const [filterFeature, setFilterFeature] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getAllProducts = async () => {
            dispatch(getProductStart());
            try {
                const res = await publicRequest.get(
                    `/products?page=${page}&sort=${sort.sort},${
                        sort.order
                    }&gender=${filterGender.toString()}&brand=${filterBrand.toString()}&style=${filterStyle.toString()}&color=${filterColor.toString()}&feature=${filterFeature.toString()}&search=${search}`,
                );
                dispatch(getProductSuccess(res.data));
            } catch (err) {
                dispatch(getProductFailure());
            }
        };

        getAllProducts();
    }, [sort, filterColor, filterGender, filterBrand, filterStyle, filterFeature, page, search, dispatch]);

    const listProduct = useSelector((state) => state.product.products);
    console.log('Data', listProduct.brand);

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
                                    <FilterByPrice />
                                    <ColoursWay
                                        colours={listProduct.color ? listProduct.color : []}
                                        filterColor={filterColor}
                                        setFilterColor={setFilterColor}
                                    />
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
