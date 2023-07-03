import React from 'react';
import { motion, useCycle } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import styles from './Marquee.module.css';

const MarqueeCustom = () => {
    return (
        <div className={styles.wrapper}>
            <Marquee speed={100}>
                <span className={styles.text}>Jokan</span>
                <span className={styles.text}>Jokan</span>
                <span className={styles.text}>Jokan</span>
            </Marquee>
        </div>
    );
};

export default MarqueeCustom;
