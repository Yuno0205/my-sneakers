import images from '../../assets/images';
import { SadIcon } from '../Icons';
import styles from './NoProducts.module.css';

function NoProducts() {
    return (
        <div className={styles.content}>
            <div className={styles.noProducts}>
                <span>Nothing matches your search</span>
                <SadIcon width="4rem" height="4rem" />
            </div>
        </div>
    );
}

export default NoProducts;
