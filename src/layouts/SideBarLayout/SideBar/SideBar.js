import clsx from 'clsx';
import styles from './SideBar.module.css';

function Sidebar({ showFilter }) {
    return (
        <div
            className={clsx(styles.wrapper, {
                [styles.hide]: !showFilter,
            })}
        >
            <div className={styles.container}>
                <div className={styles.content}></div>
            </div>
        </div>
    );
}

export default Sidebar;
