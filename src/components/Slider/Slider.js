import styles from './Slider.module.css';
import images from '../../assets/images';
import Button from '../Button';
import { NextIcon, PrevIcon } from '../Icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
function Slider() {
    const [change, setChange] = useState(false);

    const handleChange = (value) => {
        setChange(value);
        console.log(value);
    };
    return (
        <div className={styles.wrapper}>
            <div onClick={() => handleChange(false)} className={styles.prev}>
                <div className={styles.prevIcon}>
                    <PrevIcon />
                </div>
            </div>
            <div onClick={() => handleChange(true)} className={styles.next}>
                <div className={styles.nextIcon}>
                    <NextIcon />
                </div>
            </div>
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
                    {!change ? <p>from 122$</p> : <p>from 100$</p>}
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
                {!change ? <img src={images.slide1} /> : <img src={images.slide2} />}
            </div>
        </div>
    );
}

export default Slider;
