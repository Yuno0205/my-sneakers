import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { addToWishlist } from '../../../redux/wishlistSlice';
import Button from '../../Button';
import { RegularCart, RegularHeart, RegularSearch } from '../../Icons';
import styles from './ProductItem.module.css';

function ProductItem({ coating, sale, soldOut, handleShowModal, data }) {
    const classes = clsx(styles.item);
    const dispatch = useDispatch();

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
                            <img alt="" src={data?.imageMain[0]} />
                            <img alt="" className={styles.hoverProduct} src={data?.imageMain[1]} />
                        </div>
                    </Link>
                    <div className={styles.actions}>
                        <Tippy delay={200} content="Add to wish list" placement="top">
                            <div className={clsx(styles.icon, { [styles.hide]: soldOut })}>
                                <Button
                                    onClick={() => {
                                        dispatch(addToWishlist(data));
                                    }}
                                    icon={<RegularHeart />}
                                    circle
                                    product
                                ></Button>
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
                    <h4 className={styles.itemName}>{data.title}</h4>
                    <p className={styles.itemPrice}>
                        <span>
                            {data.fullPrice ? (
                                <NumericFormat
                                    thousandSeparator={true}
                                    value={data.fullPrice}
                                    suffix="  VND"
                                    displayType="text"
                                />
                            ) : (
                                ''
                            )}
                        </span>

                        {data.fullPrice ? (
                            <span className={styles.fullPrice}>
                                <NumericFormat
                                    thousandSeparator={true}
                                    value={data.currentPrice}
                                    suffix="  VND"
                                    displayType="text"
                                />
                            </span>
                        ) : (
                            <div className={styles.normal}>
                                <NumericFormat
                                    thousandSeparator={true}
                                    value={data.currentPrice}
                                    suffix="  VND"
                                    displayType="text"
                                />
                            </div>
                        )}
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProductItem;
