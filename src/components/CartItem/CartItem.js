import clsx from 'clsx';
import { HeartIcon, TrashBinIcon } from '../../components/Icons/Icons';
import Button from '../Button/Button';
import styles from './CartItem.module.css';
function CartItem({ favorite, openModal, handleShowModal }) {
    return (
        <div className={styles.cartItem}>
            <div className={styles.itemImg}>
                <img src="https://secure-images.nike.com/is/image/DotCom/DQ7658_300?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg" />
            </div>
            <div className={styles.info}>
                <div className={styles.itemInfo}>
                    <div className={styles.basicInfo}>
                        <div className={clsx(styles.infoData, styles.itemName)}>Nike Air Force 1 LV8</div>
                        <div className={styles.infoData}>Men's Shoes</div>
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
                                        <option>40</option>
                                        <option>41</option>
                                        <option>42</option>
                                        <option>43</option>
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
    );
}

export default CartItem;
