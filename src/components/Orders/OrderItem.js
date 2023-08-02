import clsx from 'clsx';

import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { HeartIcon, TrashBinIcon } from '../../components/Icons/Icons';
import Button from '../Button/Button';
import styles from './OrderItem.module.css';
function OrderItem({ favorite, openModal, handleShowModal, data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                    <div className={styles.itemImg}>
                        <img src={item.image} alt="" />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.itemInfo}>
                            <div className={styles.basicInfo}>
                                <div className={clsx(styles.infoData, styles.itemName)}>{item.title}</div>
                                <div className={styles.feature}>{item.feature}</div>
                                <div className={clsx(styles.infoData)}>Color : {item.color}</div>
                                <div className={clsx(styles.infoData, styles.selections)}>
                                    <span>Size : 40</span>
                                    <span>{item.quantity} items</span>
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
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrderItem;
