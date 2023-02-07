import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import { RegularCart, RegularHeart, RegularSearch } from '../../Icons';
import styles from './ProductItem.module.css';

function SoldOutProduct({ coating, sale, soldOut, handleShowModal, data }) {
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
                            <img
                                alt=""
                                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/deee201a-0982-4e60-8213-621e93ca36cc/custom-nike-pegasus-39-shield-by-you.png"
                            />
                            <img
                                alt=""
                                className={styles.hoverProduct}
                                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/88faf772-3fb2-4edc-9fae-e58eedae75d4/custom-nike-pegasus-39-shield-by-you.png"
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
                        <span>2,200,000đ</span>
                        <s>3,000,000đ</s>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SoldOutProduct;
