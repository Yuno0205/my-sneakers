import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import Button from '../../Button';
import { HeartIcon } from '../../Icons/Icons';
import styles from './Favourite.module.css';
import { removeFromWishlist } from '../../../redux/wishlistSlice';
function FavouriteItem({ data, hide }) {
    const dispatch = useDispatch();
    return (
        <>
            {data.items?.map((item) => (
                <div key={item._id} className={styles.wrapper}>
                    <div className={styles.body}>
                        <div className={styles.content}>
                            <div className={styles.itemImage}>
                                <div
                                    onClick={() => dispatch(removeFromWishlist(item))}
                                    className={clsx(styles.heart, { [styles.show]: hide })}
                                >
                                    <HeartIcon fill="#000" />
                                </div>
                                <img alt="colecction" src={item.imageMain[0]} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.basicInfo}>
                                    <div className={styles.titleInfo}>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.brand}>{item.category}</div>
                                    </div>

                                    <div className={styles.price}>
                                        <span className={styles.mainPrice}>
                                            {item.fullPrice ? item.fullPrice : item.currentPrice} đ
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.action}>
                                    <Button outline grey>
                                        <span>Selected size</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default FavouriteItem;
