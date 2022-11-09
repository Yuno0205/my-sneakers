import Button from '../../Button';
import styles from './Favourite.module.css';
function FavouriteItem() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.itemImage}>
                        <img
                            alt="colecction"
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7c66c860-4f82-4a52-870e-3a1084621664/air-force-1-07-lv8-shoes-rbKxJh.png"
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.basicInfo}>
                            <div className={styles.titleInfo}>
                                <div className={styles.title}>Air Jordan 1 Zoom</div>
                                <div className={styles.brand}>Shoes</div>
                            </div>

                            <div className={styles.price}>
                                <span className={styles.mainPrice}>4,100.000 đ</span>
                            </div>
                        </div>
                        <div className={styles.action}>
                            <Button outline grey>
                                <span>Selected size</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavouriteItem;
