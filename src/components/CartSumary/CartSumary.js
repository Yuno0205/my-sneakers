import clsx from 'clsx';
import styles from './CartSumary.module.css';
function CartSumary({ title = 'Summary' }) {
    return (
        <div className={styles.container}>
            <h4 className={styles.label}>{title}</h4>
            <div className={styles.summaryInfo}>
                <div className={styles.text}>Subtotal :</div>
                <div className={styles.text}>8,000,000đ</div>
            </div>
            <div className={styles.summaryInfo}>
                <div className={styles.text}>Estimated Delivery & Handling :</div>
                <div className={styles.text}>35,000đ</div>
            </div>
            <div className={clsx(styles.summaryInfo, styles.total)}>
                <div className={styles.text}>Total :</div>
                <div className={styles.text}>
                    <h4>15,000,000đ</h4>
                </div>
            </div>
        </div>
    );
}

export default CartSumary;
