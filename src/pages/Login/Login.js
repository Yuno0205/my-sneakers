import styles from './Login.module.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>Agent Login</h1>
                        <span>Hey , Enter your details to get sign in to your account</span>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.signInButton}>
                            <input type="text" required></input>

                            <span>Enter your email </span>
                        </div>

                        <div className={styles.signInButton}>
                            <input type="password" required></input>

                            <span>Password</span>
                        </div>

                        <div className={styles.loginBtn}>
                            <div>
                                <span>Sign in</span>
                            </div>
                        </div>
                        <div className={styles.otherSignIn}>
                            <span>-- Or Login With --</span>
                        </div>

                        <div className={styles.social}>
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
                                <Link>
                                    <span> Request now </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
