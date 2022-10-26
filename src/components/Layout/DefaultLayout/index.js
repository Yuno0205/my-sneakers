import Header from './Header';
import Footer from './Footer';

import styles from './DefaultLayout.module.css';
import clsx from 'clsx';
import { useState } from 'react';

function DefaultLayout({ children }) {
    const [displayCoating, setDisplayCoating] = useState(false);

    const handleShowCoating = () => {
        setDisplayCoating(true);
    };

    return (
        <div className={styles.wrapper}>
            <Header setDisplayCoating={setDisplayCoating} />

            <div className={styles.container}>
                <div className="content">{children}</div>
            </div>

            <Footer />
            <div
                className={clsx({
                    [styles.coating]: displayCoating,
                })}
            ></div>
        </div>
    );
}

export default DefaultLayout;
