import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import styles from './Decoration.module.css';
import clsx from 'clsx';
import Image from '../Image/Image';
import images from '../../assets/images';
import { useInView } from 'react-intersection-observer';

const itemVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 2,
            damping: 10,
            stiffness: 100,
        },
    },
};

const Decoration = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2, // Thay đổi ngưỡng tùy ý để đáp ứng yêu cầu của bạn
    });

    const handleInView = () => {
        if (inView) {
            controls.start('visible');
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                <div className={styles.content}>
                    <Image src={images.decorBanner} />
                </div>
            </div>
            <div className={styles.container}>
                <div className={clsx(styles.item, styles.medium)}>
                    <div
                        // variants={itemVariant}
                        // initial="initial"
                        // animate={inView ? 'animate' : 'initial'}
                        // ref={ref}
                        className={styles.content}
                    >
                        <img src="https://haaken.qodeinteractive.com/wp-content/uploads/2021/01/h5-gallery-img-1.jpg" />
                        <h2 className={clsx(styles.char, styles.title)}>Nike sport</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.item, styles.small)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>MASSIVE</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.item, styles.small)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1600269453043-e8776c7f2595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>diversity</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.item, styles.small)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1602751185176-e15370c00f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>LUXURIANT</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.item, styles.small)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1600269453383-056ff5923173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>INNOVATIVE</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.item, styles.small)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1585591359088-e144e8a61170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>VISUAL</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.item, styles.medium)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1530511250146-026c208e059e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=965&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>KINGMAKER</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.item, styles.medium)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1611417833111-284ac6508488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>JOURNEY</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.item, styles.small)}>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1637962032623-a692b4bd4a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80" />
                        <h2 className={clsx(styles.char, styles.title)}>simplify</h2>
                        <div className={styles.char}>
                            <span>Collection</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Decoration;
