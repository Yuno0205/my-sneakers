import styles from './ErrorPage.module.css';
function ErrorPage() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.page404}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.col12}>
                            <div className="col-sm-10 col-sm-offset-1 text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center">404</h1>
                                </div>
                                <div className="content_box_404">
                                    <h3 className="h2">Looks Like You're Lost</h3>
                                    <p>The page you are looking for not available</p>
                                    <a href="#">Go to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ErrorPage;
