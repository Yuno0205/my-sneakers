import styles from './SizeGroup.module.css';
function SizeGroup({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sizeTitle}>Selected size :</div>
            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default SizeGroup;
