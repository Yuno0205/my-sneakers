import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import ColorWayImage from '../../ColorWayImage/ColorWayImage';
import ColorWaySmall from '../../ColorWayImage/ColorWaySmall';
import styles from './CollectionsItem.module.css';
import { motion } from 'framer-motion';

function CollectionsItem({ item }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.wrapper}
        >
            <Link to={`/collections/${item.options[0]._id}`} key={item._id} className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.itemImage}>
                        <img alt="colecction" src={item.options[0].imageMain[0]} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.colorWay}>
                            <ColorWaySmall data={item.options} />
                        </div>

                        {item.options[0].feature ? <div className={styles.status}>{item.options[0].feature}</div> : ''}
                        <div className={styles.titleInfo}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.brand}>{item.category}</div>
                        </div>
                        <div className={styles.colours}>{item.options.length} Colours </div>
                        <div className={styles.price}>
                            <span className={styles.mainPrice}>
                                {item.options[0].fullPrice ? (
                                    <NumericFormat
                                        thousandSeparator={true}
                                        value={item.options[0].fullPrice}
                                        suffix="  VND"
                                        displayType="text"
                                    />
                                ) : (
                                    ''
                                )}
                            </span>
                            {item.options[0].fullPrice ? (
                                <span className={styles.fullPrice}>
                                    <NumericFormat
                                        thousandSeparator={true}
                                        value={item.options[0].currentPrice}
                                        suffix="  VND"
                                        displayType="text"
                                    />
                                </span>
                            ) : (
                                <div>
                                    <NumericFormat
                                        thousandSeparator={true}
                                        value={item.options[0].currentPrice}
                                        suffix="  VND"
                                        displayType="text"
                                    />
                                </div>
                            )}
                        </div>
                        {item.options[0].discount ? (
                            <div className={styles.pricePerc}>{item.options[0].discount}% off</div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default CollectionsItem;
