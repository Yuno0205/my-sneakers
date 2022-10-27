import { Triangle } from 'react-loader-spinner';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.content}>
            <div className={styles.loader}>
                <div className={styles.cube1}></div>
                <div className={styles.cube2}></div>
            </div>
        </div>
    );
};

export default Loading;
