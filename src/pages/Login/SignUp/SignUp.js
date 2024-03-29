import styles from '../Login.module.css';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import { useRef, useState } from 'react';
import clsx from 'clsx';

function Login() {
    const google = () => {
        window.open('https://jorrkan-api.onrender.com/api/auth/google', '_self');
    };

    const github = () => {
        window.open('https://jorrkan-api.onrender.com/api/auth/github', '_self');
    };

    const facebook = () => {
        window.open('https://jorrkan-api.onrender.com/api/auth/facebook', '_self');
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>Resgister to Jorkan</h1>
                        <span>Please tell us your sign up method</span>
                    </div>

                    <div className={styles.otherSignIn}>
                        <span>-- Sign up With --</span>
                    </div>

                    <div className={styles.auth}>
                        <div onClick={google} className={styles.social}>
                            <div className={styles.socialGroup}>
                                <div className={styles.socialItem}>
                                    <div className={styles.logo}>
                                        <img src="https://img.icons8.com/clouds/512/google-logo.png" alt="" />
                                    </div>
                                    <span>Google</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={github} className={styles.social}>
                            <div className={styles.socialGroup}>
                                <div className={clsx(styles.socialItem, styles.git)}>
                                    <div className={styles.logo}>
                                        <img src="https://img.icons8.com/plasticine/512/github.png" alt="" />
                                    </div>
                                    <span>Github</span>
                                </div>
                            </div>
                        </div>

                        <div onClick={facebook} className={styles.social}>
                            <div className={styles.socialGroup}>
                                <div className={clsx(styles.socialItem, styles.fb)}>
                                    <div className={styles.logo}>
                                        <img src="https://img.icons8.com/clouds/512/facebook-new.png" alt="" />
                                    </div>
                                    <span>Facebook</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.resgister}>
                        <p>
                            Have account?
                            <Link to="/login">
                                <span> Login now ...</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
