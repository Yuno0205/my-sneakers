import clsx from 'clsx';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CartSumary from '../../components/CartSumary/CartSumary';
import CheckOutItem from './CheckOutItem/CheckOutItem';
import styles from './Checkout.module.css';
import { basicSchema } from '../../components/Validations/UserValidation';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

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

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={basicSchema}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className={styles.form}>
                                    <div className={styles.info}>
                                        <div className={styles.nameInfo}>
                                            <Input type="text" name="firstName" content="First Name" />
                                        </div>
                                        <div className={styles.nameInfo}>
                                            <Input type="text" name="lastName" content="Last Name" />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <p
                                            style={{
                                                paddingLeft: '20px',
                                                textDecoration: 'underline',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Enter address manually
                                        </p>
                                    </div>

                                    <Input content="Adress" name="adress" type="text" />
                                    <div className={styles.info}>
                                        <div>
                                            <Input type="text" name="email" content="Email" />
                                        </div>
                                        <div>
                                            <Input type="text" name="firstName" content="Phone Number" />
                                        </div>
                                    </div>
                                    <button disabled={isSubmitting} type="submit" className={styles.loginBtn}>
                                        <span>Check out</span>
                                    </button>
                                </Form>
                            )}
                        </Formik>
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
