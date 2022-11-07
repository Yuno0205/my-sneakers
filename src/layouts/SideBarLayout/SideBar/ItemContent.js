import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon } from '../../../components/Icons';
import styles from './SideBar.module.css';
function ItemContent() {
    const [check, setCheck] = useState(false);

    const handleCheck = (check) => {
        check ? setCheck(false) : setCheck(true);
    };

    return (
        <div
            onClick={() => handleCheck(check)}
            className={clsx(styles.checkbox, {
                [styles.check]: check,
            })}
        >
            <div className={styles.checkboxIcon}>
                <CheckIcon />
            </div>
        </div>
    );
}

export default ItemContent;
