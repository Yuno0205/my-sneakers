import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SaleItem.module.css';

import Tippy from '@tippyjs/react';
import Button from '../Button';
import { RegularCart, RegularHeart, RegularSearch } from '../Icons';
import { useEffect, useState } from 'react';
import { publicRequest } from '../../utils/request';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import RightModal from '../Modal/RightModal/RightModal';
import Modal from '../Modal/Modal';
import { addToWishlist } from '../../redux/wishlistSlice';

function SaleItem({ coating, sale, soldOut, handleShowModal, item }) {
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const classes = clsx(styles.item);
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const notifySizeValidate = () => toast.error('Opps ! You must choose at least one size !');
    const notifyError = () =>
        toast.info(
            'SO SORRY :( ! This feature is not complete yet, we will try to fix it in the future :( . Please scroll down to the arrivals part to experience it.',
        );

    const handleAddToWishlist = (data) => {
        dispatch(addToWishlist(data));
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.itemImage}>
                    <Link
                        className={clsx({
                            [styles.coating]: coating,
                        })}
                        to={'/'}
                    >
                        <div className={styles.relative}>
                            <img alt="" src={item.imageMain[0]} />
                            <img alt="" className={styles.hoverProduct} src={item.imageMain[2]} />
                        </div>
                    </Link>
                    <div className={styles.actions}>
                        <Tippy delay={200} content="Add to wish list" placement="top">
                            <div className={styles.icon}>
                                <Button
                                    onClick={() => handleAddToWishlist(item)}
                                    icon={<RegularHeart />}
                                    circle
                                    product
                                ></Button>
                            </div>
                        </Tippy>

                        <Tippy delay={200} content="Add to cart" placement="top">
                            <div onClick={() => notifyError()} className={styles.icon}>
                                <Button icon={<RegularCart />} circle product></Button>
                            </div>
                        </Tippy>
                        <Tippy delay={200} content="More infomation" placement="top">
                            <div className={styles.icon}>
                                <Button to={`collections/${item._id}`} icon={<RegularSearch />} circle product></Button>
                            </div>
                        </Tippy>
                    </div>
                    <div
                        className={clsx({
                            [styles.soldOut]: soldOut,
                        })}
                    >
                        {soldOut ? 'Sold out' : ''}
                    </div>
                    <div
                        className={clsx({
                            [styles.labelSale]: sale,
                        })}
                    >
                        {item.discount + '%'}
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <h4 className={styles.itemName}>{item.title}</h4>
                    <p className={styles.itemPrice}>
                        <span>
                            <NumericFormat
                                thousandSeparator={true}
                                value={item.fullPrice}
                                suffix="  VND"
                                displayType="text"
                            />
                        </span>
                        <s>
                            <NumericFormat
                                thousandSeparator={true}
                                value={item.currentPrice}
                                suffix="  VND"
                                displayType="text"
                            />
                        </s>
                    </p>
                </div>
            </div>
            <ToastContainer position="top-right" />
        </div>
    );
}

export default SaleItem;
