import styles from './CollectionsGroup.module.css';
function Collections({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>{children}</div>
        </div>
    );
}

export default Collections;
