import { Form, Formik } from 'formik';
import { basicSchema } from '../../components/Validations/UserValidation';

import styles from './Login.module.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { useRef, useState } from 'react';
import clsx from 'clsx';

function Login() {
    const google = () => {
        window.open('https://jorkan-backend.vercel.app/api/auth/login/success', '_self');
    };

    const github = () => {
        window.open('http://localhost:5000/api/auth/github', '_self');
    };

    const facebook = () => {
        window.open('http://localhost:5000/api/auth/facebook', '_self');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>Login to Jorkan</h1>
                        <span> Please tell us your sign in method</span>
                    </div>

                    <div className={styles.otherSignIn}>
                        <span>-- Sign in With --</span>
                    </div>

                    <div className={styles.auth}>
                        <div onClick={google} className={styles.social}>
                            <div className={styles.socialGroup}>
                                <div className={styles.socialItem}>
                                    <div className={styles.logo}>
                                        <img alt="" src="https://img.icons8.com/clouds/512/google-logo.png" />
                                    </div>
                                    <span>Google</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={github} className={styles.social}>
                            <div className={styles.socialGroup}>
                                <div className={clsx(styles.socialItem, styles.git)}>
                                    <div className={styles.logo}>
                                        <img alt="" src="https://img.icons8.com/plasticine/512/github.png" />
                                    </div>
                                    <span>Github</span>
                                </div>
                            </div>
                        </div>

                        <div onClick={facebook} className={styles.social}>
                            <div className={styles.socialGroup}>
                                <div className={clsx(styles.socialItem, styles.fb)}>
                                    <div className={styles.logo}>
                                        <img alt="" src="https://img.icons8.com/clouds/512/facebook-new.png" />
                                    </div>
                                    <span>Facebook</span>
                                </div>
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
                </div>
            </div>
        </div>
    );
}

export default Login;
