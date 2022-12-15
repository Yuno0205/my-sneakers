import clsx from 'clsx';
import styles from './SizeItem.module.css';

function SizeItem({ children, inStock }) {
    return (
        <div
            className={clsx(styles.sizeItem, {
                [styles.outOfStock]: !inStock,
            })}
        >
            {children}
        </div>
    );
}

export default SizeItem;
