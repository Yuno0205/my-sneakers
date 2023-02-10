import styles from './Slider.module.css';
import images from '../../assets/images';
import Button from '../Button';
import { NextIcon, PrevIcon } from '../Icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
function BannerSlider() {
    const [change, setChange] = useState(true);

    const handleChange = (change) => {
        change ? setChange(false) : setChange(true);
    };

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setChange((prev) => !prev);
    //     }, 5000);

    //     return () => clearInterval(id);
    // }, []);

    const settings = {
        dots: true,
        autoplay: true,
        fade: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.wrapper}>
            <Slider {...settings} className={styles.cover}>
                <div className={clsx(styles.content)}>
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
                                <p>from 1,000,000đ</p>
                            </div>
                            <div
                                className={clsx(styles.boxBtn, {
                                    [styles.show]: change,
                                })}
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
                <div className={clsx(styles.content)}>
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
                                    Collection
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
                                <p>from 1,200,000đ</p>
                            </div>
                            <div
                                className={clsx(styles.boxBtn, {
                                    [styles.show]: change,
                                })}
                            >
                                <a>Shop now</a>
                            </div>
                        </div>
                        <div
                            className={clsx(styles.picture, {
                                [styles.show]: change,
                            })}
                        >
                            <img src={images.slide2} />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default BannerSlider;
