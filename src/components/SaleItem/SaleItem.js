import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './SaleItem.module.css';

import Tippy from '@tippyjs/react';
import Button from '../Button';
import { RegularCart, RegularHeart, RegularSearch } from '../Icons';

function SaleItem({ coating, sale, soldOut, handleShowModal }) {
    return (
        <div className={styles.item}>
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
                            <div className={styles.icon}>
                                <Button to="/wishlist" icon={<RegularHeart />} circle product></Button>
                            </div>
                        </Tippy>

                        <Tippy delay={200} content="Add to cart" placement="top">
                            <div className={styles.icon}>
                                <Button to="/wishlist" icon={<RegularCart />} circle product></Button>
                            </div>
                        </Tippy>
                        <Tippy delay={200} content="More infomation" placement="top">
                            <div onClick={() => handleShowModal(true)} className={styles.icon}>
                                <Button icon={<RegularSearch />} circle product></Button>
                            </div>
                        </Tippy>
                    </div>
                    <div
                        className={clsx({
                            [styles.soldOut]: soldOut,
                        })}
                    >
                        {soldOut ? 'Sold out' : ''}
                    </div>
                    <div
                        className={clsx({
                            [styles.labelSale]: sale,
                        })}
                    >
                        {sale ? '50 %' : ''}
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

export default SaleItem;
