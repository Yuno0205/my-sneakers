import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon } from '../../../../components/Icons';
import styles from '../SideBar.module.css';
function ColorItem({ color }) {
    const [check, setCheck] = useState(false);
    const handleChange = (e) => {
        setCheck((prevCheck) => !prevCheck);
        console.log(check);
    };

    return (
        <div className={styles.colorContent}>
            <input type="checkbox" onChange={handleChange} />
            <div
                style={{
                    display: 'inline-block',
                    backgroundColor: `${color}`,
                    border: '1px solid #ccc',
                }}
                className={clsx(styles.color)}
            ></div>
            <span className={styles.colorName}>{color}</span>
            <div className={clsx(styles.iconCheck, { [styles.hide]: !check })}>
                <CheckIcon />
            </div>
        </div>
    );
}

export default ColorItem;
