import styles from './Slider.module.css';
import images from '../../assets/images';
import Button from '../Button';
import { NextIcon, PrevIcon } from '../Icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
function Slider() {
    const [change, setChange] = useState(true);

    const handleChange = (change) => {
        {
            change ? setChange(false) : setChange(true);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <div
                    className={clsx(styles.content, {
                        [styles.current]: change,
                    })}
                >
                    <div onClick={() => handleChange(change)} className={styles.prev}>
                        <div className={styles.prevIcon}>
                            <PrevIcon />
                        </div>
                    </div>
                    <div onClick={() => handleChange(change)} className={styles.next}>
                        <div className={styles.nextIcon}>
                            <NextIcon />
                        </div>
                    </div>
                    <div className={styles.slideInfo}>
                        <div className={styles.sliderShow}>
                            <img src={images.slideBackground} />
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.title}>
                                <h3
                                    className={clsx(styles.title1, {
                                        [styles.active]: change,
                                    })}
                                >
                                    Mordern
                                </h3>
                            </div>
                            <div className={styles.title}>
                                <h3
                                    className={clsx(styles.title2, {
                                        [styles.active]: change,
                                    })}
                                >
                                    Sneaker
                                </h3>
                            </div>
                            <div
                                className={clsx(styles.price, {
                                    [styles.show]: change,
                                })}
                            >
                                <p>from 100$</p>
                            </div>
                            <div
                                className={clsx(
                                    styles.boxBtn,
                                    {
                                        [styles.show]: change,
                                    },
                                    styles.boxAni,
                                )}
                            >
                                <Link>Shop now</Link>
                            </div>
                        </div>
                        <div
                            className={clsx(styles.picture, {
                                [styles.show]: change,
                            })}
                        >
                            <img src={images.slide1} />
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(styles.content, {
                        [styles.current]: !change,
                    })}
                >
                    <div onClick={() => handleChange(change)} className={styles.prev}>
                        <div className={styles.prevIcon}>
                            <PrevIcon />
                        </div>
                    </div>
                    <div onClick={() => handleChange(change)} className={styles.next}>
                        <div className={styles.nextIcon}>
                            <NextIcon />
                        </div>
                    </div>
                    <div className={styles.slideInfo}>
                        <div className={styles.sliderShow}>
                            <img src={images.slideBackground} />
                        </div>
                        <div className={styles.boxContent}>
                            <div className={styles.title}>
                                <h3
                                    className={clsx(styles.title1, {
                                        [styles.active]: !change,
                                    })}
                                >
                                    Collection
                                </h3>
                            </div>
                            <div className={styles.title}>
                                <h3
                                    className={clsx(styles.title2, {
                                        [styles.active]: !change,
                                    })}
                                >
                                    Sneaker
                                </h3>
                            </div>
                            <div
                                className={clsx(styles.price, {
                                    [styles.show]: !change,
                                })}
                            >
                                <p>from 122$</p>
                            </div>
                            <div
                                className={clsx(styles.boxBtn, {
                                    [styles.show]: !change,
                                })}
                            >
                                <a>Shop now</a>
                            </div>
                        </div>
                        <div
                            className={clsx(styles.picture, {
                                [styles.show]: !change,
                            })}
                        >
                            <img src={images.slide2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
