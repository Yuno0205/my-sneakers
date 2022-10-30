import Footer from '../DefaultLayout/Footer';
import Header from '../DefaultLayout/Header';
import styles from './SideBarLayout.module.css';
import SideBar from './SideBar';
function SideBarLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.content}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default SideBarLayout;
