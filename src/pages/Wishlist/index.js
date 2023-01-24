import styles from './Wishlist.module.css';
import Button from '../../components/Button';
import CollectionsGroup from '../../components/CollectionsGroup';
import CollectionsItem from '../../components/CollectionsGroup/CollectionsItem/CollectionsItem';
import FavouriteItem from '../../components/CollectionsGroup/FavouriteItem/Favourite';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import clsx from 'clsx';
function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist);
    const [hide, setHide] = useState(false);
    const toggleHide = () => setHide((value) => !value);
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
                                <div className={clsx({ [styles.hide]: hide })}>
                                    <Button onClick={toggleHide} outline grey>
                                        <span> Edit </span>
                                    </Button>
                                </div>
                                <div className={clsx({ [styles.hide]: !hide })}>
                                    <Button onClick={toggleHide} primary grey>
                                        <span> Done </span>
                                    </Button>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
                <div className={styles.offsetWall}></div>
                <div className={styles.content}>
                    <div className={styles.results}>
                        <CollectionsGroup>
                            <FavouriteItem hide={hide} data={wishlist} />
                        </CollectionsGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
