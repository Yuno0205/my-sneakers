import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import Button from '../../components/Button/Button';
function ErrorPage() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.h1}>404</h1>
                <h3 className={styles.h3}>page not found</h3>
            </div>
            <div className={styles.container}>
                <div className={styles.ghostCopy}>
                    <div className={styles.one}></div>
                    <div className={styles.two}></div>
                    <div className={styles.three}></div>
                    <div className={styles.four}></div>
                </div>
                <div className={styles.ghost}>
                    <div className={styles.face}>
                        <div className={styles.eye}></div>
                        <div className={styles.eyeRight}></div>
                        <div className={styles.mouth}></div>
                    </div>
                </div>
                <div className={styles.shadow}></div>
            </div>
            <div className="bottom">
                <p className={styles.p}>Boo, looks like a ghost stole this page!</p>

                <div className={styles.buttons}>
                    <Button outline>
                        <Link to="/">Back to home ?</Link>
                    </Button>
                    <Button outline className={styles.btn}>
                        <Link to="/">Also home :))</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
