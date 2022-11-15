import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { basicSchema } from '../../components/Validations/UserValidation';
import styles from './Resgister.module.css';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

function Resgister() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Sign up</h2>
                    <span>Please fill your infamation to sign up</span>
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
                                <Input content="Email" name="email" type="text" />
                                <Input content="Password" name="password" type="password" />
                                <Input content="Confirm password" name="confirmPassword" type="password" />

                                <button disabled={isSubmitting} type="submit" className={styles.loginBtn}>
                                    <span>Sign up</span>
                                </button>

                                <div className={styles.resgister}>
                                    <p>
                                        Have account?
                                        <Link to="/login">
                                            <span> Login now ...</span>
                                        </Link>
                                    </p>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Resgister;
