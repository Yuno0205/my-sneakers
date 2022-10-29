import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { CartIcon, HeartIcon, RegularCart, RegularHeart, RegularSearch, SearchIcon } from '../../components/Icons';
import styles from './Home.module.css';
function Home() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>New Arrivals</h3>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.itemContent}>
                                <div className={styles.itemImage}>
                                    <Link to={'/'}>
                                        <img src="https://cdn.shopify.com/s/files/1/0267/0211/8947/products/product5.jpg?v=1570096493" />
                                    </Link>
                                    <div className={styles.actions}>
                                        <Tippy content="Add to wish list" placement="top">
                                            <div className={styles.icon}>
                                                <Button to="/wishlist" icon={<RegularHeart />} circle product></Button>
                                            </div>
                                        </Tippy>

                                        <Tippy content="Add to cart" placement="top">
                                            <div className={styles.icon}>
                                                <Button to="/wishlist" icon={<RegularCart />} circle product></Button>
                                            </div>
                                        </Tippy>
                                        <Tippy content="More infomation" placement="top">
                                            <div className={styles.icon}>
                                                <Button to="/wishlist" icon={<RegularSearch />} circle product></Button>
                                            </div>
                                        </Tippy>
                                    </div>
                                </div>
                                <div className={styles.itemInfo}>
                                    <h4 className={styles.itemName}>Nike 1</h4>
                                    <p className={styles.itemPrice}>
                                        <span>2,200,000đ</span>
                                        <s>3,000,000đ</s>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
