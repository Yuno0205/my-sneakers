import styles from './Login.module.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
function Login() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>Login</h1>
                        <span>Hey , Enter your details to get sign in to your account</span>
                    </div>
                    <div className={styles.body}>
                        <Input value="Enter your email" />
                        <Input value="Password" type="password" />

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
                                    <span> Request now ...</span>
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
