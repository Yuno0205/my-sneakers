import styles from './Wishlist.module.css';
import Button from '../../components/Button';
import CollectionsGroup from '../../components/CollectionsGroup';
import CollectionsItem from '../../components/CollectionsGroup/CollectionsItem/CollectionsItem';
import FavouriteItem from '../../components/CollectionsGroup/FavouriteItem/Favourite';
function Wishlist() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.offsetWall}></div>
                <div className={styles.headerCollections}>
                    <header className={styles.headerWrapper}>
                        <div className={styles.headerContent}>
                            <h1 className={styles.headerTitle}>
                                Favourites
                                <span className={styles.itemCount}>(4)</span>
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
                            <FavouriteItem />
                            <FavouriteItem />
                            <FavouriteItem />
                            <FavouriteItem />
                        </CollectionsGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
