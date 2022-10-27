import { Triangle } from 'react-loader-spinner';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.content}>
            <div class={styles.loader}>
                <div class={styles.cube1}></div>
                <div class={styles.cube2}></div>
            </div>
        </div>
    );
};

export default Loading;
