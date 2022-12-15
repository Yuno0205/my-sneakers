import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/apiCall';

import ColorWayImage from '../../ColorWayImage/ColorWayImage';
import styles from './CollectionsItem.module.css';

function CollectionsItem() {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const listProduct = useSelector((state) => state.product.products);
    console.log('data :' + listProduct);

    return (
        <div className={styles.wrapper}>
            {listProduct.map((item) => (
                <div key={item._id}>{item.title}</div>
            ))}
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.itemImage}>
                        <img
                            alt="colecction"
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7c66c860-4f82-4a52-870e-3a1084621664/air-force-1-07-lv8-shoes-rbKxJh.png"
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.colorWay}>
                            <ColorWayImage small />
                            <div className={styles.remain}>
                                <span>+4</span>
                            </div>
                        </div>

                        <div className={styles.status}>Just in</div>
                        <div className={styles.titleInfo}>
                            <div className={styles.title}>Air Jordan 1 Zoom</div>
                            <div className={styles.brand}>Shoes</div>
                        </div>
                        <div className={styles.colours}>7 Colours </div>
                        <div className={styles.price}>
                            <span className={styles.mainPrice}>4,100.000 đ</span>
                            <span className={styles.sale}>4,100.000 đ</span>
                        </div>
                        <div className={styles.pricePerc}>15% off</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionsItem;
