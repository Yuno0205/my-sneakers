import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../redux/cartSlice';
import styles from './CartSumary.module.css';

function CartSumary({ title = 'Summary' }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getCartTotal());
    }, []);

    return (
        <div className={styles.container}>
            <h4 className={styles.label}>{title}</h4>
            <div className={styles.summaryInfo}>
                <div className={styles.text}>Subtotal :</div>
                <div className={styles.text}>{cart.totalAmount}đ</div>
            </div>
            <div className={styles.summaryInfo}>
                <div className={styles.text}>Estimated Delivery & Handling :</div>
                <div className={styles.text}>{cart.totalAmount ? 35000 : 0}đ</div>
            </div>
            <div className={clsx(styles.summaryInfo, styles.total)}>
                <div className={styles.text}>Total :</div>
                <div className={styles.text}>
                    <h4>{cart.totalAmount > 0 ? cart.totalAmount + 35000 : 0}đ</h4>
                </div>
            </div>
        </div>
    );
}

export default CartSumary;
