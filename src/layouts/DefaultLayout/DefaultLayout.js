import Header from './Header';
import Footer from './Footer';

import styles from './DefaultLayout.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import Slider from '../../components/Slider';

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Slider />
            <div className={styles.container}>
                <div>{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
