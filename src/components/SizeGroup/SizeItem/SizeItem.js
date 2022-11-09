import styles from './SizeItem.module.css';
function SizeItem({ children }) {
    return <div className={styles.sizeItem}>{children}</div>;
}

export default SizeItem;
