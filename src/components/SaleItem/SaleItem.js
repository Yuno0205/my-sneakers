import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './SaleItem.module.css';

import Tippy from '@tippyjs/react';
import Button from '../Button';
import { RegularCart, RegularHeart, RegularSearch } from '../Icons';
import { useEffect, useState } from 'react';
import { publicRequest } from '../../utils/request';
import { NumericFormat } from 'react-number-format';

function SaleItem({ coating, sale, soldOut, handleShowModal, item }) {
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
                            <img alt="" src={item.imageMain[0]} />
                            <img alt="" className={styles.hoverProduct} src={item.imageMain[2]} />
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
                        {item.discount + '%'}
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <h4 className={styles.itemName}>{item.title}</h4>
                    <p className={styles.itemPrice}>
                        <span>
                            <NumericFormat
                                thousandSeparator={true}
                                value={item.fullPrice}
                                suffix="  VND"
                                displayType="text"
                            />
                        </span>
                        <s>
                            <NumericFormat
                                thousandSeparator={true}
                                value={item.currentPrice}
                                suffix="  VND"
                                displayType="text"
                            />
                        </s>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SaleItem;
