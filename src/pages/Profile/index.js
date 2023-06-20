import { Link } from 'react-router-dom';
import WishlistItem from '../../components/CartItem/WishlistItem/WishlistItem';
import Input from '../../components/Input/Input';
import styles from './Profile.module.css';
import { useState } from 'react';
function Profile() {
    const [openModal, setOpenModal] = useState(false);

    const handleShowModal = (value) => {
        setOpenModal(value);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                <div className={styles.profileBasic}>
                    <div className={styles.profileImage}>
                        <img src="https://tiki.vn/blog/wp-content/uploads/2023/03/Satoru_Gojo_thumb.webp" alt="" />
                    </div>
                    <div className={styles.profileName}>
                        <h2>Nhật Hào</h2>
                        <span>Join from November 15, 2022</span>
                    </div>
                </div>

                <div className={styles.details}>
                    <h2>Personal details</h2>
                    <div className={styles.info}>
                        <div className={styles.cover}>
                            <h3>First name</h3>
                            <div className={styles.item}>
                                <span>Nhật</span>
                            </div>
                        </div>
                        <div className={styles.cover}>
                            <h3>Last name</h3>
                            <div className={styles.item}>
                                <span>Hào</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.cover}>
                            <h3>Your email</h3>
                            <div className={styles.item}>
                                <span>mainhathao19@gmail.com</span>
                            </div>
                        </div>
                        <div className={styles.cover}>
                            <h3>Phone number</h3>
                            <div className={styles.item}>
                                <span>098877362</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wishlist}>
                <div className={styles.favourites}>
                    <h4 className={styles.title}>Favourites</h4>
                    <div className={styles.content}>
                        <div className={styles.favouriteContent}>
                            <WishlistItem openModal={openModal} handleShowModal={handleShowModal} favorite />
                        </div>
                    </div>
                    <Link className={styles.viewMore} to="/wishlist">
                        View More Wishlist
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;
