import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon } from '../../../../components/Icons';
import styles from '../SideBar.module.css';
function ColorItem({ color, setFilterColor, filterColor }) {
    const [check, setCheck] = useState(false);
    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setFilterColor(isChecked ? [...filterColor, value] : filterColor.filter((item) => item !== value));
        setCheck(isChecked);
    };

    return (
        <div className={styles.colorContent}>
            <div className={clsx(styles.iconCheck, { [styles.hide]: !check }, { [styles.isWhite]: color === 'White' })}>
                <CheckIcon />
            </div>
            <input value={color} type="checkbox" onChange={handleChange} />
            <div
                style={{
                    display: 'inline-block',
                    backgroundColor: `${color}`,
                    border: '1px solid #ccc',
                }}
                className={clsx(styles.color)}
            ></div>
            <span className={styles.colorName}>{color}</span>
        </div>
    );
}

export default ColorItem;
