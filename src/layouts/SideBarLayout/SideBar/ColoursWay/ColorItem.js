import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon } from '../../../../components/Icons';
import styles from '../SideBar.module.css';
function ColorItem({ data }) {
    const [check, setCheck] = useState(false);
    const handleChange = (e) => {
        console.log(e.target.checked);
        setCheck(e.target.checked);
    };

    return (
        <div className={styles.colorContent}>
            <input type="checkbox" onChange={handleChange} />
            <div
                style={{
                    display: 'inline-block',
                    backgroundColor: `${data.code.hex}`,
                    border: '1px solid #ccc',
                }}
                className={clsx(styles.color)}
            ></div>
            <span className={styles.colorName}>{data.color}</span>
            {check ? (
                <div className={styles.iconCheck}>
                    <CheckIcon />
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default ColorItem;
