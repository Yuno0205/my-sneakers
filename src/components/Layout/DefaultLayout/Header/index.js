import styles from './Header.module.css';
import { CartIcon, HeartIcon, LogoIcon } from '../../../Icons';

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}></div>
        </header>
    );
}

export default Header;
