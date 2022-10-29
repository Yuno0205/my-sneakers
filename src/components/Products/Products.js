import styles from './Products.module.css';
function Products({ children }) {
    return <div className={styles.items}>{children}</div>;
}

export default Products;
