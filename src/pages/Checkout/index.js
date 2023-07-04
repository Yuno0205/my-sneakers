import clsx from 'clsx';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CartSumary from '../../components/CartSumary/CartSumary';
import CheckOutItem from './CheckOutItem/CheckOutItem';
import styles from './Checkout.module.css';
import { basicSchema } from '../../components/Validations/UserValidation';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

function Checkout() {
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    const notify = () => toast.error('Opps ! You must fill in all the information !');

    // const onSubmit = async (values, actions) => {
    //     if (isValid && dirty) {
    //         navigate('/success');
    //     } else {
    //         notify();
    //     }
    // };

    const onSubmit = async (values, actions) => {
        console.log('Dataa : ', values);
        console.log('Action : ', actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

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
                            initialValues={{
                                email: '',
                                phoneNumber: '',
                                firstName: '',
                                lastName: '',
                                address: '',
                            }}
                            validationSchema={basicSchema}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className={styles.form}>
                                    <div className={styles.info}>
                                        <div className={styles.nameInfo}>
                                            <Input type="text" name="firstName" content="First name" />
                                        </div>
                                        <div className={styles.nameInfo}>
                                            <Input type="text" name="lastName" content="Last name" />
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

                                    <Input content="Adress" name="address" type="text" />
                                    <div className={styles.info}>
                                        <div>
                                            <Input type="text" name="email" content="Email" />
                                        </div>
                                        <div>
                                            <Input type="text" name="phoneNumber" content="Phone Number" />
                                        </div>
                                    </div>
                                    <div className={styles.continued}>
                                        <Button disabled={isSubmitting} primary large type="submit">
                                            <span className={styles.white}>Check out</span>
                                        </Button>

                                        {/* <button disabled={isSubmitting} type="submit">
                                            Submit
                                        </button> */}
                                        <Button outline large type="submit">
                                            <Link to="/collections">
                                                <span className={styles.black}>Countinued Shopping</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className={styles.summary}>
                        <CartSumary title="In your bag" />

                        <div>Product's infomation :</div>
                        <CheckOutItem />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Checkout;
