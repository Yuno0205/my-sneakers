import clsx from 'clsx';
import styles from './ColorWayImage.module.css';

function ColorWayImage({ small }) {
    return (
        <div className={styles.wrapper}>
            <div
                className={clsx(styles.content, {
                    [styles.small]: small,
                })}
            >
                <div
                    className={clsx(styles.item, {
                        [styles.small]: small,
                    })}
                >
                    <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/57b33ad2-23c7-4127-b1de-e084e13004b0/air-max-270-mens-shoes-KkLcGR.png" />
                </div>
                <div
                    className={clsx(styles.item, {
                        [styles.small]: small,
                    })}
                >
                    <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/57b33ad2-23c7-4127-b1de-e084e13004b0/air-max-270-mens-shoes-KkLcGR.png" />
                </div>
                <div
                    className={clsx(styles.item, {
                        [styles.small]: small,
                    })}
                >
                    <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/57b33ad2-23c7-4127-b1de-e084e13004b0/air-max-270-mens-shoes-KkLcGR.png" />
                </div>
                <div
                    className={clsx(styles.item, {
                        [styles.small]: small,
                    })}
                >
                    <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/57b33ad2-23c7-4127-b1de-e084e13004b0/air-max-270-mens-shoes-KkLcGR.png" />
                </div>
                <div
                    className={clsx(styles.item, {
                        [styles.small]: small,
                    })}
                >
                    <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/57b33ad2-23c7-4127-b1de-e084e13004b0/air-max-270-mens-shoes-KkLcGR.png" />
                </div>
                <div
                    className={clsx(styles.item, {
                        [styles.small]: small,
                    })}
                >
                    <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/57b33ad2-23c7-4127-b1de-e084e13004b0/air-max-270-mens-shoes-KkLcGR.png" />
                </div>
                <div
                    className={clsx(styles.item, {
                        [styles.small]: small,
                    })}
                >
                    <img src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/57b33ad2-23c7-4127-b1de-e084e13004b0/air-max-270-mens-shoes-KkLcGR.png" />
                </div>
            </div>
        </div>
    );
}

export default ColorWayImage;
