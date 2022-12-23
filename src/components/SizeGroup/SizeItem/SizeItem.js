import clsx from 'clsx';
import { useState } from 'react';
import styles from './SizeItem.module.css';

function SizeItem({ children, inStock, handleSetSize }) {
    const [selected, setSelected] = useState(false);

    const handleChangeSize = (e) => {
        if (inStock) {
            handleSetSize(e.target.value);
        }
    };

    const handleChecked = (e) => {
        // e.target.checked ? (e.target.checked = false) : (e.target.checked = true);
        console.log('check');
    };

    return (
        <div
            className={clsx(styles.sizeItem, {
                [styles.defaultPointer]: !inStock,
            })}
        >
            <input name="size" value={children} type="radio" onClick={handleChecked} onChange={handleChangeSize} />
            <label
                className={clsx(styles.sizeContent, {
                    [styles.outOfStock]: !inStock,
                })}
            >
                {children}
            </label>
        </div>
    );
}

export default SizeItem;
