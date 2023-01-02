import styles from './Wishlist.module.css';
import Button from '../../components/Button';
import CollectionsGroup from '../../components/CollectionsGroup';
import CollectionsItem from '../../components/CollectionsGroup/CollectionsItem/CollectionsItem';
import FavouriteItem from '../../components/CollectionsGroup/FavouriteItem/Favourite';
import { useSelector } from 'react-redux';
function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist);
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.offsetWall}></div>
                <div className={styles.headerCollections}>
                    <header className={styles.headerWrapper}>
                        <div className={styles.headerContent}>
                            <h1 className={styles.headerTitle}>
                                Favourites
                                <span className={styles.itemCount}>({wishlist.items.length})</span>
                            </h1>
                            <nav className={styles.headerNav}>
                                <Button outline grey>
                                    <span> Edit </span>
                                </Button>
                            </nav>
                        </div>
                    </header>
                </div>
                <div className={styles.offsetWall}></div>
                <div className={styles.content}>
                    <div className={styles.results}>
                        <CollectionsGroup>
                            <FavouriteItem data={wishlist} />
                        </CollectionsGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
