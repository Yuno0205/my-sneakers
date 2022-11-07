import ProductItem from '../../components/Products/ProductItem/ProductItem';
import Products from '../../components/Products';
import styles from './Home.module.css';
import Slider from '../../components/Slider';
function Home() {
    return (
        <div>
            <Slider />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>New Arrivals</h3>
                    </div>
                    <Products>
                        <ProductItem coating sale soldOut />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem sale />
                        <ProductItem />
                    </Products>
                </div>
            </div>
        </div>
    );
}

export default Home;
