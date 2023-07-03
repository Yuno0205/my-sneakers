// CheckoutForm.js
import { Form, Formik } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Checkout.module.css';
import { basicSchema } from '../../components/Validations/UserValidation';
import { Link } from 'react-router-dom';

function CheckoutForm({ onSubmit }) {
    return (
        <Formik
            initialValues={{
                email: '',
                phoneNumber: '',
                firstName: '',
                lastName: '',
                address: '',
            }}
            validationSchema={basicSchema}
            onSubmit={async (values, actions) => {
                const isFormValid = await actions.validateForm();
                onSubmit(isFormValid);
            }}
        >
            {({ isValid }) => (
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
                        <Button
                            onClick={() => {
                                // Cập nhật trạng thái hoàn tất của Formik trước khi submit
                                onSubmit();
                            }}
                            primary
                            large
                            type="submit"
                        >
                            <span className={styles.white}>Check out</span>
                        </Button>

                        <Button outline large>
                            <Link to="/collections">
                                <span className={styles.black}>Continue Shopping</span>
                            </Link>
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CheckoutForm;
