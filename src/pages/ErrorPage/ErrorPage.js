import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
function ErrorPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mars}></div>
            <img alt="" src="https://assets.codepen.io/1538474/404.svg" class={styles.logo404} />

            <p className={styles.title}>Oh no!!</p>
            <p className={styles.subtitle}>
                You're either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div align="center">
                <Link className={styles.btnBack} to="/">
                    Back to home ?
                </Link>
            </div>
            <img alt="" src="https://assets.codepen.io/1538474/astronaut.svg" className={styles.astronaut} />
            <img alt="" src="https://assets.codepen.io/1538474/spaceship.svg" className={styles.spaceship} />
        </div>
    );
}

export default ErrorPage;
