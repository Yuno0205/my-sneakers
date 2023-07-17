import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';
import images from '../../assets/images';
import Button from '../Button';
import { NextIcon, PrevIcon } from '../Icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

function BannerSlider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    }, []);

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
    };

    const upVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
    };

    const zoomOutVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const fallingVariant = {
        initial: { y: -500, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: {
            type: 'spring',
            damping: 10,
            stiffness: 400,
        },
    };

    return (
        <div className={styles.wrapper}>
            <Slider {...settings} className={styles.cover} ref={sliderRef}>
                <div className={clsx(styles.content)}>
                    <div className={styles.slideInfo}>
                        <div className={styles.sliderShow}>
                            <img alt="" src={images.slideBackground} />
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.title}>
                                <motion.h3
                                    className={clsx(styles.title1)}
                                    initial="hidden"
                                    animate={currentSlide === 0 ? 'visible' : 'hidden'}
                                    variants={leftVariants}
                                    transition={{ duration: 2 }}
                                >
                                    Mordern
                                </motion.h3>
                            </div>
                            <div className={styles.title}>
                                <motion.h3
                                    variants={rightVariants}
                                    initial="hidden"
                                    animate={currentSlide === 0 ? 'visible' : 'hidden'}
                                    transition={{ duration: 2 }}
                                    className={clsx(styles.title2)}
                                >
                                    Sneaker
                                </motion.h3>
                            </div>
                            <div className={clsx(styles.price)}>
                                <motion.p
                                    variants={upVariants}
                                    initial="hidden"
                                    animate={currentSlide === 0 ? 'visible' : 'hidden'}
                                    transition={{ duration: 2 }}
                                >
                                    from 1,000,000đ
                                </motion.p>
                            </div>
                            <motion.div
                                variants={zoomOutVariant}
                                initial="hidden"
                                animate={currentSlide === 0 ? 'visible' : 'hidden'}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={clsx(styles.boxBtn)}
                            >
                                <Link>Shop now</Link>
                            </motion.div>
                        </div>
                        <div className={clsx(styles.picture)}>
                            <motion.img
                                variants={fallingVariant}
                                initial="initial"
                                animate={currentSlide === 0 ? 'animate' : 'initial'}
                                transition={fallingVariant.transition}
                                src={images.slide1}
                            />
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.content)}>
                    <div className={styles.slideInfo}>
                        <div className={styles.sliderShow}>
                            <img src={images.slideBackground} />
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.title}>
                                <motion.h3
                                    className={clsx(styles.title1)}
                                    initial="hidden"
                                    animate={currentSlide !== 0 ? 'visible' : 'hidden'}
                                    variants={leftVariants}
                                    transition={{ duration: 2 }}
                                >
                                    Collection
                                </motion.h3>
                            </div>
                            <div className={styles.title}>
                                <motion.h3
                                    variants={rightVariants}
                                    initial="hidden"
                                    animate={currentSlide !== 0 ? 'visible' : 'hidden'}
                                    transition={{ duration: 2 }}
                                    className={clsx(styles.title2)}
                                >
                                    Sneaker
                                </motion.h3>
                            </div>
                            <div className={clsx(styles.price)}>
                                <motion.p
                                    variants={upVariants}
                                    initial="hidden"
                                    animate={currentSlide !== 0 ? 'visible' : 'hidden'}
                                    transition={{ duration: 2 }}
                                >
                                    from 1,200,000đ
                                </motion.p>
                            </div>
                            <motion.div
                                variants={zoomOutVariant}
                                initial="hidden"
                                animate={currentSlide !== 0 ? 'visible' : 'hidden'}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={clsx(styles.boxBtn)}
                            >
                                <a>Shop now</a>
                            </motion.div>
                        </div>
                        <div className={clsx(styles.picture)}>
                            <motion.img
                                src={images.slide2}
                                variants={fallingVariant}
                                initial="initial"
                                animate={currentSlide !== 0 ? 'animate' : 'initial'}
                                transition={fallingVariant.transition}
                            />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default BannerSlider;
