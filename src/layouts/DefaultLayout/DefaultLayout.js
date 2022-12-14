import Header from './Header';
import Footer from './Footer';

import styles from './DefaultLayout.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />

            <div className={styles.container}>
                <div>{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
