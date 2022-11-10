import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import { HeartIcon, TrashBinIcon } from '../../components/Icons/Icons';
import styles from './Cart.module.css';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal';
import { useState } from 'react';
import CartSumary from '../../components/CartSumary/CartSumary';
function Cart() {
    const [openModal, setOpenModal] = useState(false);

    const handleShowModal = (value) => {
        setOpenModal(value);
    };
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.bag}>
                            <h4 className={styles.title}>Bag</h4>
                            <div className={styles.bagContent}>
                                <CartItem />
                                <CartItem />
                                <CartItem />
                            </div>
                        </div>
                        <div className={styles.summary}>
                            <CartSumary />
                        </div>
                    </div>
                    <div className={styles.favourites}>
                        <h4 className={styles.title}>Favourites</h4>
                        <div className={styles.content}>
                            <div className={styles.favouriteContent}>
                                <CartItem openModal={openModal} handleShowModal={handleShowModal} favorite />
                            </div>
                            <div className={styles.favouriteContent}>
                                <CartItem />
                            </div>
                        </div>
                        <Link className={styles.viewMore} to="/">
                            View More Wishlist
                        </Link>
                    </div>
                </div>
            </div>
            <Modal openModal={openModal} handleShowModal={handleShowModal} />
        </div>
    );
}

export default Cart;
