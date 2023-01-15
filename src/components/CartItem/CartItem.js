import clsx from 'clsx';
import { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { HeartIcon, TrashBinIcon } from '../../components/Icons/Icons';
import { changeQuantity, changeSize, getCartTotal, removeFromCart } from '../../redux/cartSlice';
import Button from '../Button/Button';
import styles from './CartItem.module.css';
function CartItem({ favorite, openModal, handleShowModal }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
        <>
            {cart.items?.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                    <div className={styles.itemImg}>
                        <img src={item.imageMain[0]} alt="" />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.itemInfo}>
                            <div className={styles.basicInfo}>
                                <div className={clsx(styles.infoData, styles.itemName)}>{item.title}</div>
                                <div className={styles.infoData}>{item.gender[0]}'s Shoes</div>
                                <div
                                    className={clsx(styles.infoData, {
                                        [styles.hide]: favorite,
                                    })}
                                >
                                    {item.color}
                                </div>
                                <div className={clsx(styles.infoData, styles.selections)}>
                                    <div
                                        className={clsx(styles.optionContent, {
                                            [styles.hide]: favorite,
                                        })}
                                    >
                                        <span>Size</span>
                                        <div className={styles.sizeOptions}>
                                            <select
                                                value={item.size}
                                                onChange={(e) => {
                                                    dispatch(
                                                        changeSize({
                                                            ...item,
                                                            size: e.target.value,
                                                        }),
                                                    );
                                                }}
                                            >
                                                {item.skuData ? (
                                                    item.skuData.map((size, index) =>
                                                        size.inStock ? <option key={index}>{size.size}</option> : '',
                                                    )
                                                ) : (
                                                    <></>
                                                )}
                                            </select>
                                        </div>
                                        <ToastContainer />
                                    </div>
                                    <div
                                        className={clsx(styles.optionContent, {
                                            [styles.hide]: favorite,
                                        })}
                                    >
                                        <span>Quantity</span>
                                        <div className={styles.sizeOptions}>
                                            <select
                                                value={item.quantity}
                                                onChange={(e) => {
                                                    dispatch(
                                                        changeQuantity({
                                                            ...item,
                                                            quantity: e.target.value,
                                                        }),
                                                    );
                                                    dispatch(getCartTotal());
                                                }}
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div
                                        className={clsx(styles.openModal, {
                                            [styles.show]: favorite,
                                        })}
                                        onClick={() => handleShowModal(true)}
                                    >
                                        Select size
                                    </div>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <span>
                                    <NumericFormat
                                        thousandSeparator={true}
                                        value={item.price}
                                        suffix="  VND"
                                        displayType="text"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <div
                                className={clsx(styles.action, styles.heart, {
                                    [styles.hide]: favorite,
                                })}
                            >
                                <HeartIcon />
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(removeFromCart(item));
                                    dispatch(getCartTotal());
                                }}
                                className={clsx(styles.action, {
                                    [styles.hide]: favorite,
                                })}
                            >
                                <TrashBinIcon />
                            </div>
                            <div
                                className={clsx(styles.addBag, {
                                    [styles.show]: favorite,
                                })}
                            >
                                <Button outline>
                                    <p>Add to bag</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CartItem;
