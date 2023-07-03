import { Link } from 'react-router-dom';
import styles from './Advertisement.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const slideUpFadeInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideRightFadeInVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.5 } },
};

function Advertisement() {
    const [ref, inView] = useInView({
        triggerOnce: false, // Kích hoạt animation lặp lại khi xuất hiện trong viewport và rời khỏi viewport
        threshold: 0.1,
    });

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        setIsInView(inView);
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            variants={slideUpFadeInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.boxImg}>
                        <Link to="/">
                            <img
                                alt=""
                                src="https://cdn.shopify.com/s/files/1/0267/0211/8947/files/banner-v7.jpg?v=1613631152"
                            />
                        </Link>
                    </div>
                    <div className={styles.info}>
                        <motion.h3
                            variants={slideRightFadeInVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            className={styles.title}
                        >
                            End of season clearance <br /> sale up to 30%
                        </motion.h3>
                        <Link className={styles.redirect}>Shipping & Returns</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Advertisement;
