import styles from './Popper.module.css';

function Wrapper({ children }) {
    return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
