import styles from './LoadingPage.module.css';
function LoadingPage() {
    setTimeout(function () {
        window.location.href = 'http://localhost:3000';
    }, 2000);
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className={styles.base}>
                    <span></span>
                    <div className={styles.face}></div>
                </div>
            </div>
            <div className={styles.longfazers}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>Redirecting...</h1>
        </div>
    );
}

export default LoadingPage;
