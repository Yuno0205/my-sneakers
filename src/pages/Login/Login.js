import styles from './Login.module.css';
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
                            <input placeholder="Enter your email / account"></input>
                        </div>

                        <div className={styles.signInButton}>
                            <input placeholder="Password" />
                        </div>

                        <div className={styles.loginBtn}>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
