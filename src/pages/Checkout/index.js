import clsx from 'clsx';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CartSumary from '../../components/CartSumary/CartSumary';
import CheckOutItem from './CheckOutItem/CheckOutItem';
import styles from './Checkout.module.css';
import { basicSchema } from '../../components/Validations/UserValidation';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import ModalCustom from '../../components/Modal/ModalCustom/ModalCustom';
import { useState } from 'react';

import { createOrder } from '../../redux/orderSlice';
import { selectUserToken } from '../../redux/userSlice';

function Checkout() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const token = useSelector(selectUserToken);
    const cart = useSelector((state) => state.cart);

    console.log(cart.items);

    const notify = () => toast.error('Opps ! You must fill in all the information !');
    const notify2 = () => toast.info('Your shopping cart is empty, please add the product to the cart and come back !');

    const [showModal, setShowModal] = useState(false);

    const onSubmit = async (values, actions) => {
        if (!token) {
            navigate('/login');
            return;
        }

        if (cart.items.length === 0) {
            notify2();
            return;
        }
        const customerInfo = {
            name: values.firstName + values.lastName,
            address: values.address,
            email: values.email,
            phoneNumber: values.phoneNumber,
        };

        const items = cart.items.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
            color: product.color,
            size: product.size,
            title: product.title,
            feature: product.feature,
            image: product.imageMain[0],
        }));

        const orderData = {
            customerInfo,
            items,
            total: cart.totalAmount,
            address: values.address,
        };

        console.log(orderData);
        try {
            dispatch(createOrder(orderData, token));
            // actions.resetForm();
            setShowModal(true);
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
            // Hiển thị thông báo lỗi
            notify();
        }
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
                        <CheckOutItem cart={cart} />
                    </div>
                </div>
            </div>
            <ModalCustom showModal={showModal} />
            <ToastContainer />
        </div>
    );
}

export default Checkout;
