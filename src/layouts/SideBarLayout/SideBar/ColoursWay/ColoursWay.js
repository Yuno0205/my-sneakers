import clsx from 'clsx';
import { useState } from 'react';
import { CheckIcon, DownIcon, UpIcon } from '../../../../components/Icons';
import ColorItem from './ColorItem';
import styles from '../SideBar.module.css';
function ColoursWay() {
    const [hideFilter, setHideFilter] = useState(false);
    let hexCode = [
        {
            color: 'Red',
            code: {
                hex: '#E7352B',
            },
        },
        {
            color: 'White',
            code: {
                hex: '#fff',
            },
        },
        {
            color: 'Black',
            code: {
                hex: '#111',
            },
        },
        {
            color: 'Blue',
            code: {
                hex: '#1790c8',
            },
        },
        {
            color: 'Purple',
            code: {
                hex: '#8d429f',
            },
        },
        {
            color: 'Yellow',
            code: {
                hex: '#fed533',
            },
        },
        {
            color: 'Green',
            code: {
                hex: '#7bba3c',
            },
        },
        {
            color: 'Brown',
            code: {
                hex: '#825d41',
            },
        },
        {
            color: 'Pink',
            code: {
                hex: '#f0728f',
            },
        },
    ];

    const handleFilter = (hideFilter) => {
        hideFilter ? setHideFilter(false) : setHideFilter(true);
        console.log(hideFilter);
    };

    return (
        <div className={styles.filterItem}>
            <span onClick={() => handleFilter(hideFilter)} className={styles.spanTitle}>
                <div className={styles.filterTitle}>
                    <div className={styles.filterLabel}>Colours</div>
                    <div className={styles.filterIcon}>{hideFilter ? <DownIcon /> : <UpIcon />}</div>
                </div>
            </span>
            <div
                className={clsx(styles.filterContent, styles.gender, {
                    [styles.hide]: hideFilter,
                })}
            >
                <div className={styles.filterInner}>
                    <div className={styles.colorsGroup}>
                        {hexCode?.map((item, index) => (
                            <ColorItem key={index} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColoursWay;
