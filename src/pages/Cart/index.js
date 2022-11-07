import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import { HeartIcon, TrashBinIcon } from '../../components/Icons/Icons';
import styles from './Cart.module.css';
import Button from '../../components/Button/Button';
function Cart() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.bag}>
                            <h4 className={styles.title}>Bag</h4>
                            <div className={styles.bagContent}>
                                <CartItem />
                                <CartItem />
                                <CartItem />
                            </div>
                        </div>
                        <div className={styles.summary}>
                            <div className={styles.cartSummary}>
                                <h4 className={styles.title}>Summary</h4>
                                <div className={styles.summaryInfo}>
                                    <div className={styles.textInfo}>Subtotal :</div>
                                    <div className={styles.textInfo}>8,000,000đ</div>
                                </div>
                                <div className={styles.summaryInfo}>
                                    <div className={styles.textInfo}>Estimated Delivery & Handling :</div>
                                    <div className={styles.textInfo}>35,000,000đ</div>
                                </div>
                                <div className={clsx(styles.summaryInfo, styles.total)}>
                                    <div className={styles.textInfo}>Total :</div>
                                    <div className={styles.textInfo}>
                                        <h4>15,000,000đ</h4>
                                    </div>
                                </div>
                                <Button primary large>
                                    <p className={styles.checkOutText}>Member Checkout</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.favourites}>
                        <h4 className={styles.title}>Favourites</h4>
                        <div className={styles.content}>
                            <div className={styles.favouriteContent}>
                                <CartItem />
                            </div>
                            <div className={styles.favouriteContent}>
                                <CartItem />
                            </div>
                        </div>
                        <Link className={styles.viewMore} to="/">
                            View More Wishlist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
