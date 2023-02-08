import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { addToCart } from '../../../redux/cartSlice';
import { addToWishlist } from '../../../redux/wishlistSlice';
import Button from '../../Button';
import { RegularCart, RegularHeart, RegularSearch } from '../../Icons';
import Modal from '../../Modal/Modal';
import RightModal from '../../Modal/RightModal/RightModal';
import styles from './ProductItem.module.css';

function ProductItem({ coating, sale, soldOut, data }) {
    const user = useSelector((state) => state.user.currentUser);
    const [modalOpen, setModalOpen] = useState(false);
    const classes = clsx(styles.item);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const notifySizeValidate = () => toast.error('Opps ! You must choose at least one size !');

    const handleSetSize = (value) => {
        setSize(value);
    };

    const handleAddToCart = () => {
        if (size) {
            dispatch(
                addToCart({
                    ...data,
                    quantity,
                    color: data.color,
                    size: size,
                    price: data.fullPrice ? data.fullPrice * quantity : data.currentPrice * quantity,
                }),
            );
            setOpenModal(false);
            setModalOpen(true);
        } else {
            notifySizeValidate();
        }
    };

    const handleAddToWishlist = (data) => {
        if (user) {
            dispatch(addToWishlist(data));
            setModalOpen(true);
        } else {
            navigate('/login');
        }
    };

    const handleShowModal = () => {
        if (user) {
            setOpenModal(true);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className={classes}>
            <div className={styles.itemContent}>
                <div className={styles.itemImage}>
                    <Link
                        className={clsx({
                            [styles.coating]: coating,
                        })}
                        to={'/'}
                    >
                        <div className={styles.relative}>
                            <img alt="" src={data?.imageMain[0]} />
                            <img alt="" className={styles.hoverProduct} src={data?.imageMain[1]} />
                        </div>
                    </Link>
                    <div className={styles.actions}>
                        <Tippy delay={200} content="Add to wish list" placement="top">
                            <div className={clsx(styles.icon, { [styles.hide]: soldOut })}>
                                <Button
                                    onClick={() => handleAddToWishlist(data)}
                                    icon={<RegularHeart />}
                                    circle
                                    product
                                ></Button>
                            </div>
                        </Tippy>

                        <Tippy delay={200} content="Add to cart" placement="top">
                            <div onClick={handleShowModal} className={clsx(styles.icon, { [styles.hide]: soldOut })}>
                                <Button icon={<RegularCart />} circle product></Button>
                            </div>
                        </Tippy>
                        <Tippy delay={200} content="More infomation" placement="top">
                            <div className={clsx(styles.icon, { [styles.hide]: soldOut })}>
                                <Button to={`collections/${data._id}`} icon={<RegularSearch />} circle product></Button>
                            </div>
                        </Tippy>
                    </div>
                    <div
                        className={clsx(styles.hide, {
                            [styles.soldOut]: soldOut,
                        })}
                    >
                        Sold out
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <h4 className={styles.itemName}>{data.title}</h4>
                    <p className={styles.itemPrice}>
                        <span>
                            {data.fullPrice ? (
                                <NumericFormat
                                    thousandSeparator={true}
                                    value={data.fullPrice}
                                    suffix="  VND"
                                    displayType="text"
                                />
                            ) : (
                                ''
                            )}
                        </span>

                        {data.fullPrice ? (
                            <span className={styles.fullPrice}>
                                <NumericFormat
                                    thousandSeparator={true}
                                    value={data.currentPrice}
                                    suffix="  VND"
                                    displayType="text"
                                />
                            </span>
                        ) : (
                            <div className={styles.normal}>
                                <NumericFormat
                                    thousandSeparator={true}
                                    value={data.currentPrice}
                                    suffix="  VND"
                                    displayType="text"
                                />
                            </div>
                        )}
                    </p>
                </div>
            </div>
            <ToastContainer position="bottom-left" />
            {modalOpen && <RightModal data={data} setOpenModal={setModalOpen} />}
            <Modal
                handleAddToCart={handleAddToCart}
                modalData={data}
                setOpenModal={setOpenModal}
                openModal={openModal}
                handleSetSize={handleSetSize}
            />
        </div>
    );
}

export default ProductItem;
