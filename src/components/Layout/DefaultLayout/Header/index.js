import styles from './Header.module.css';
import { CartIcon, HeartIcon, LogoIcon, SearchIcon } from '../../../Icons';
import images from '../../../../assets/images';

console.log(styles);

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={images.logo} alt="" />
                </div>
                <div className={styles.nav}>
                    <div className={styles.menu}>
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.search}>
                        <input placeholder="Search ..." />
                        <button className={styles.searchBtn}>
                            <SearchIcon />
                        </button>
                        <button className={styles.clear}></button>
                    </div>
                </div>
                <div className={styles.action}></div>
            </div>
        </header>
    );
}

export default Header;
