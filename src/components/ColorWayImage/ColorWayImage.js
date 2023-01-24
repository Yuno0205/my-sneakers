import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './ColorWayImage.module.css';

function ColorWayImage({ small, items }) {
    return (
        <div className={styles.wrapper}>
            <div
                className={clsx(styles.content, {
                    [styles.small]: small,
                })}
            >
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className={clsx(styles.item, {
                            [styles.small]: small,
                        })}
                    >
                        <Link to={`/collections/${item._id}`}>
                            <img alt="" src={item.imageExtra[0]} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ColorWayImage;
