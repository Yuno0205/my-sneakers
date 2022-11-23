import { Form, Formik } from 'formik';
import { basicSchema } from '../../components/Validations/UserValidation';

import styles from './Login.module.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { useRef, useState } from 'react';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

function Login() {
    const google = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    };

    const github = () => {
        window.open('http://localhost:5000/auth/github', '_self');
    };

    const facebook = () => {
        window.open('http://localhost:5000/auth/facebook', '_self');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>Login</h1>
                        <span>Hey , Enter your details to get sign in to your account</span>
                    </div>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={basicSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Input content="Email" name="email" type="text" />
                                <Input content="Password" name="password" type="password" />

                                <button disabled={isSubmitting} type="submit" className={styles.loginBtn}>
                                    <span>Sign in</span>
                                </button>
                                <div className={styles.otherSignIn}>
                                    <span>-- Or Login With --</span>
                                </div>

                                <div onClick={google} className={styles.social}>
                                    <div className={styles.socialGroup}>
                                        <div className={styles.socialItem}>
                                            <div className={styles.logo}>
                                                <img src="https://img.icons8.com/clouds/512/google-logo.png" />
                                            </div>
                                            <span>Google</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.resgister}>
                                    <p>
                                        Don't have account?
                                        <Link to="/resgister">
                                            <span> Request now ...</span>
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

export default Login;
