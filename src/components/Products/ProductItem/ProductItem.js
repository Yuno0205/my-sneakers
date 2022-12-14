import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import { RegularCart, RegularHeart, RegularSearch } from '../../Icons';
import styles from './ProductItem.module.css';

function ProductItem({ coating, sale, soldOut, handleShowModal }) {
    const classes = clsx(styles.item);
    return (
        <div className={classes}>
            <div className={styles.itemContent}>
                <div className={styles.itemImage}>
                    <Link
                        className={clsx({
                            [styles.coating]: coating,
                        })}
                        to={'/'}
                    >
                        <div className={styles.relative}>
                            <img src="https://cdn.shopify.com/s/files/1/0267/0211/8947/products/product5.jpg?v=1570096493" />
                            <img
                                className={styles.hoverProduct}
                                src="https://cdn.shopify.com/s/files/1/0267/0211/8947/products/product6_ff30be10-564e-46e2-9f75-4088d7ea8f0f.jpg?v=1570096386"
                            />
                        </div>
                    </Link>
                    <div className={styles.actions}>
                        <Tippy delay={200} content="Add to wish list" placement="top">
                            <div className={clsx(styles.icon, { [styles.hide]: soldOut })}>
                                <Button to="/wishlist" icon={<RegularHeart />} circle product></Button>
                            </div>
                        </Tippy>

                        <Tippy delay={200} content="Add to cart" placement="top">
                            <div className={clsx(styles.icon, { [styles.hide]: soldOut })}>
                                <Button to="/wishlist" icon={<RegularCart />} circle product></Button>
                            </div>
                        </Tippy>
                        <Tippy delay={200} content="More infomation" placement="top">
                            <div
                                onClick={() => handleShowModal(true)}
                                className={clsx(styles.icon, { [styles.hide]: soldOut })}
                            >
                                <Button icon={<RegularSearch />} circle product></Button>
                            </div>
                        </Tippy>
                    </div>
                    <div
                        className={clsx(styles.hide, {
                            [styles.soldOut]: soldOut,
                        })}
                    >
                        Sold out
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <h4 className={styles.itemName}>Nike 1</h4>
                    <p className={styles.itemPrice}>
                        <span>2,200,000??</span>
                        <s>3,000,000??</s>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
