import { Link } from 'react-router-dom';
import ColorWayImage from '../../ColorWayImage/ColorWayImage';
import styles from './CollectionsItem.module.css';

function CollectionsItem({ item }) {
    return (
        <div className={styles.wrapper}>
            <Link to={`/collections/${item._id}`} key={item._id} className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.itemImage}>
                        <img alt="colecction" src={item.imageMain[0]} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.colorWay}>
                            <ColorWayImage small />
                            <div className={styles.remain}>
                                <span>+4</span>
                            </div>
                        </div>

                        {item.feature ? <div className={styles.status}>{item.feature}</div> : ''}
                        <div className={styles.titleInfo}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.brand}>{item.category}</div>
                        </div>
                        <div className={styles.colours}>7 Colours </div>
                        <div className={styles.price}>
                            <span className={styles.mainPrice}>{item.currentPrice}đ</span>
                            {item.fullPrice ? <span className={styles.sale}>{item.fullPrice}đ</span> : ''}
                        </div>
                        {item.discount ? <div className={styles.pricePerc}>{item.discount}% off</div> : ''}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CollectionsItem;
