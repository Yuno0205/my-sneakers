import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { HeartIcon, TrashBinIcon } from '../../components/Icons/Icons';
import Button from '../Button/Button';
import styles from './CartItem.module.css';
function CartItem({ favorite, openModal, handleShowModal }) {
    const cart = useSelector((state) => state.cart);

    return (
        <>
            {cart.items.map((item, index) => (
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
                                    Malachite/Sail/White/Blue Jay
                                </div>
                                <div className={clsx(styles.infoData, styles.selections)}>
                                    <div
                                        className={clsx(styles.optionContent, {
                                            [styles.hide]: favorite,
                                        })}
                                    >
                                        <span>Size</span>
                                        <div className={styles.sizeOptions}>
                                            <select>
                                                {item.skuData?.map((size, index) =>
                                                    size.inStock ? <option key={index}>{size.size}</option> : '',
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div
                                        className={clsx(styles.optionContent, {
                                            [styles.hide]: favorite,
                                        })}
                                    >
                                        <span>Quantity</span>
                                        <div className={styles.sizeOptions}>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
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
                                <span>4,250,200đ</span>
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
