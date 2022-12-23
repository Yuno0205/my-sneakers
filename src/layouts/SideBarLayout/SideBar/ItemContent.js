import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CheckIcon } from '../../../components/Icons';
import { addFilterSuccess } from '../../../redux/filterSlice';
import styles from './SideBar.module.css';
function ItemContent({ item, title }) {
    const [check, setCheck] = useState(false);
    const [filterValue, setFilterValue] = useState({});
    const dispatch = useDispatch();

    const handleCheck = () => {
        setCheck((value) => !value);
        try {
            const data = { [title]: item };
            setFilterValue(data);
            dispatch(addFilterSuccess({ ...data }));
        } catch (error) {
            console.log('Error :', error);
        }
    };

    console.log(filterValue);

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
