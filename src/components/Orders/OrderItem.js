import clsx from 'clsx';

import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { HeartIcon, TrashBinIcon } from '../../components/Icons/Icons';
import Button from '../Button/Button';
import styles from './OrderItem.module.css';
function OrderItem({ favorite, openModal, handleShowModal }) {
    const items = [
        {
            title: "Nike Air Force 1 '07 WB",
            color: 'Brown',
            currentPrice: 2400000,
            discount: 0,
            feature: 'Just in',
            imageExtra: [
                'https://static.nike.com/a/images/t_PDP_144_v1/f_au…v6opt8txu/air-force-1-07-wb-mens-shoes-txRBM6.png',
            ],
            imageMain: [
                'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9586f004-25c7-4e72-bef9-6492f6491a4b/air-force-1-07-wb-mens-shoes-txRBM6.png',
            ],
            inOnSale: false,
            price: 240000,
            quantity: 1,
        },
    ];

    return (
        <>
            {items?.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                    <div className={styles.itemImg}>
                        <img src={item.imageMain[0]} alt="" />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.itemInfo}>
                            <div className={styles.basicInfo}>
                                <div className={clsx(styles.infoData, styles.itemName)}>{item.title}</div>
                                <div className={styles.feature}>{item.feature}</div>
                                <div className={clsx(styles.infoData)}>Color : {item.color}</div>
                                <div className={clsx(styles.infoData, styles.selections)}>
                                    <span>Size : 40</span>
                                    <span>10 item</span>
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
        </>
    );
}

export default OrderItem;
