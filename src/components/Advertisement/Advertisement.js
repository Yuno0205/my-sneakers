import { Link } from 'react-router-dom';
import styles from './Advertisement.module.css';
import * as image from '../../assets/images';

function Advertisement() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.boxImg}>
                        <Link to="/">
                            <img src="https://cdn.shopify.com/s/files/1/0267/0211/8947/files/banner-v7.jpg?v=1613631152" />
                        </Link>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.title}>
                            End of season clearnce <br></br>sale up to 30%
                        </h3>
                        <Link className={styles.redirect}>Shipping & Returns</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advertisement;
