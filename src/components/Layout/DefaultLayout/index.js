import Header from './Header';
import Footer from './Footer';

import styles from './DefaultLayout.module.css';

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />

            <div className={styles.container}>
                <div className="content">{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
