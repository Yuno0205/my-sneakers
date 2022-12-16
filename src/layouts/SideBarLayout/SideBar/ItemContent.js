import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon } from '../../../components/Icons';
import styles from './SideBar.module.css';
function ItemContent({ item, title }) {
    const [check, setCheck] = useState(false);
    const [filtersValue, setFilterValue] = useState({});

    const handleFilter = () => {
        // setFilterValue((currentState) => {
        //     return { ...currentState, title: item };
        // });
        setFilterValue((prev) => {
            return { ...prev, [title]: item };
        });
    };

    const handleCheck = (item) => {
        console.log(item, title);

        setCheck((value) => !value);
    };

    return (
        <div className={styles.contentItem} onClick={handleCheck}>
            <div
                className={clsx(styles.checkbox, {
                    [styles.check]: check,
                })}
            >
                <div className={styles.checkboxIcon}>
                    <CheckIcon />
                </div>
            </div>
            <span>{item}</span>
        </div>
    );
}

export default ItemContent;
