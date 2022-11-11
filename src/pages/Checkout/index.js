import clsx from 'clsx';
import styles from './Checkout.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CartSumary from '../../components/CartSumary/CartSumary';
import CheckOutItem from './CheckOutItem/CheckOutItem';
import { Link } from 'react-router-dom';
function Checkout() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Check out</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.infoUser}>
                        <h4 className={styles.label}>Customer's Infomations</h4>
                        <div className={styles.form}>
                            <div className={styles.infomations}>
                                <div className={styles.info}>
                                    <div className={styles.inputItem}>
                                        <Input type="text" value="First name*" />
                                    </div>
                                    <div className={styles.inputItem}>
                                        <Input type="text" value="Last name*" />
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.inputItem}>
                                        <Input type="text" value="Your address"></Input>
                                    </div>
                                </div>
                                <h4>Contact to you : </h4>
                                <div className={styles.info}>
                                    <div className={styles.inputItem}>
                                        <Input type="text" value="Email*" />
                                    </div>
                                    <div className={styles.inputItem}>
                                        <Input type="text" value="Phone Number*" />
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.inputItem}>
                                        <Link to="/cart">
                                            <div className={styles.checkout}>
                                                <span>Back to your bag</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.inputItem}>
                                        <div className={styles.checkout}>
                                            <span>Check out</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.summary}>
                        <CartSumary title="In your bag" />

                        <div>Product's infomation :</div>
                        <CheckOutItem />
                        <CheckOutItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
