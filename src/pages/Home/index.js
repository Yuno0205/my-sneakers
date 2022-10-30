import ProductItem from '../../components/Products/ProductItem/ProductItem';
import Products from '../../components/Products';
import styles from './Home.module.css';
function Home() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>New Arrivals</h3>
                    </div>
                    <Products>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </Products>
                </div>
            </div>
        </div>
    );
}

export default Home;
