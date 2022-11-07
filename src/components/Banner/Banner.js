import { Link } from 'react-router-dom';
import styles from './Banner.module.css';
function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.bannerInfo}>
                            <div className={styles.bannerImg}>
                                <Link>
                                    <img
                                        alt="banner"
                                        src="https://cdn.shopify.com/s/files/1/0267/0211/8947/files/banner-v3-1.jpg?v=1613630057"
                                    />
                                </Link>
                            </div>
                            <div className={styles.bannerContent}>
                                <h3>
                                    New <br></br> Collections
                                </h3>
                                <div className={styles.shopNow}>
                                    <Link to="/" className={styles.textShop}>
                                        Shop now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.bannerInfo}>
                            <div className={styles.bannerImg}>
                                <Link>
                                    <img
                                        alt="banner"
                                        src="https://cdn.shopify.com/s/files/1/0267/0211/8947/files/banner-v3-2.jpg?v=1613630057"
                                    />
                                </Link>
                            </div>
                            <div className={styles.bannerContent}>
                                <h3>
                                    New <br></br> Loafers
                                </h3>
                                <div className={styles.shopNow}>
                                    <Link to="/" className={styles.textShop}>
                                        Shop now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
