import Header from './Header';
import Footer from './Footer';

import styles from './DefaultLayout.module.css';
import clsx from 'clsx';
import { useState } from 'react';

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
