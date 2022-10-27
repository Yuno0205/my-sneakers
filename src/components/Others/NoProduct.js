import images from '../../assets/images';
import styles from './NoProducts.module.css';

function NoProducts() {
    return (
        <div className={styles.content}>
            <div className={styles.noProducts}>
                <img src={images.noProduct} alt="404" />
            </div>
        </div>
    );
}

export default NoProducts;
