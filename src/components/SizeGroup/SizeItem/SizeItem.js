import clsx from 'clsx';
import { useState } from 'react';
import styles from './SizeItem.module.css';

function SizeItem({ children, inStock }) {
    const [selected, setSelected] = useState(false);
    const handleSelectedSize = () => {
        setSelected((value) => !value);
        // setSelected(selected ? false : true);
    };
    return (
        <div className={clsx(styles.sizeItem)} onClick={inStock ? () => handleSelectedSize() : undefined}>
            <input name="size" type="radio" checked={selected} onChange={() => {}} />
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
