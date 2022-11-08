import styles from './Products.module.css';
function Products({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>{children}</div>
        </div>
    );
}
export default Products;
