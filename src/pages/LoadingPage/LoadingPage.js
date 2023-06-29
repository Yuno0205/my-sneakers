import styles from './LoadingPage.module.css';
function LoadingPage() {
    return (
        // <div className={styles.wrapper}>
        //     <div className={styles.body}>
        //         <span>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </span>
        //         <div className={styles.base}>
        //             <span></span>
        //             <div className={styles.face}></div>
        //         </div>
        //     </div>
        //     <div className={styles.longfazers}>
        //         <span></span>
        //         <span></span>
        //         <span></span>
        //         <span></span>
        //     </div>
        //     <h1>Redirecting...</h1>
        // </div>
        <div className={styles.wrapper}>
            <svg width="100vw" height="100vh">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="20%" stopColor="#fff" />
                        <stop offset="40%" stopColor="#fff" />
                        <stop offset="60%" stopColor="#fff" />
                        <stop offset="80%" stopColor="#fff" />
                    </linearGradient>
                </defs>
                <text x="50%" y="50%" textAnchor="middle" className={styles.textStroke} stroke="url(#gradient)">
                    Jorkan
                </text>
            </svg>
        </div>
    );
}

export default LoadingPage;
