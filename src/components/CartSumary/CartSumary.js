import clsx from 'clsx';
import { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
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
                <div className={styles.text}>
                    <NumericFormat
                        thousandSeparator={true}
                        value={cart.totalAmount}
                        suffix="  VND"
                        displayType="text"
                    />
                </div>
            </div>
            <div className={styles.summaryInfo}>
                <div className={styles.text}> Delivery & Handling :</div>
                <div className={styles.text}>
                    {cart.totalAmount ? (
                        <NumericFormat thousandSeparator={true} value={35000} suffix="  VND" displayType="text" />
                    ) : (
                        0
                    )}
                </div>
            </div>
            <div className={clsx(styles.summaryInfo, styles.total)}>
                <div className={styles.text}>Total :</div>
                <div className={styles.text}>
                    <h4>
                        <NumericFormat
                            thousandSeparator={true}
                            value={cart.totalAmount > 0 ? cart.totalAmount + 35000 : 0}
                            suffix="  VND"
                            displayType="text"
                        />
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CartSumary;
