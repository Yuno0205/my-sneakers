import clsx from 'clsx';
import styles from './Checkout.module.css';
function Checkout() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Check out</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.infoUser}>
                        <h4 className={styles.label}>Delivery Options</h4>
                        <div className={styles.form}></div>
                    </div>
                    <div className={styles.summary}>
                        <div className={styles.cartSummary}>
                            <h4 className={styles.label}>Summary</h4>
                            <div className={styles.summaryInfo}>
                                <div className={styles.textInfo}>Subtotal :</div>
                                <div className={styles.textInfo}>8,000,000đ</div>
                            </div>
                            <div className={styles.summaryInfo}>
                                <div className={styles.textInfo}>Estimated Delivery & Handling :</div>
                                <div className={styles.textInfo}>35,000,000đ</div>
                            </div>
                            <div className={clsx(styles.summaryInfo, styles.total)}>
                                <div className={styles.textInfo}>Total :</div>
                                <div className={styles.textInfo}>
                                    <h4>15,000,000đ</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
