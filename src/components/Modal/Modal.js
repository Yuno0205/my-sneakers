import clsx from 'clsx';
import { NumericFormat } from 'react-number-format';
import ColoursWay from '../../layouts/SideBarLayout/SideBar/ColoursWay/ColoursWay';
import Button from '../Button';
import styles from './Modal.module.css';
import SizeItem from '../../components/SizeGroup/SizeItem/SizeItem';
import { ClearIcon } from '../Icons';

function Modal({ openModal, setOpenModal, modalData, handleAddToCart, handleSetSize }) {
    const handleClose = () => {
        setTimeout(() => {
            setOpenModal(false);
        }, 10);
    };
    return (
        <>
            {modalData ? (
                <div
                    className={clsx(styles.wrapper, {
                        [styles.active]: openModal,
                    })}
                >
                    <div
                        // className={clsx(styles.container, {
                        //     [styles.rightToShort]: !openModal,
                        // })}

                        className={clsx(styles.container, {
                            [styles.rightToShort]: !openModal,
                        })}
                    >
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img alt="" src={modalData.imageMain[0] ?? ''} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoContent}>
                                    <div className={styles.productInfo}>
                                        <p className={styles.bottom}>{modalData.title}</p>
                                        <div className={styles.price}>
                                            <span>
                                                <NumericFormat
                                                    thousandSeparator={true}
                                                    value={
                                                        modalData?.fullPrice
                                                            ? modalData.fullPrice
                                                            : modalData?.currentPrice
                                                    }
                                                    suffix="  VND"
                                                    displayType="text"
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.actions}>
                                        <div className={styles.sizeWrapper}>
                                            <div className={styles.size}>
                                                <div className={styles.sizeTitle}>Selected size</div>
                                                <div className={styles.sizeContainer}>
                                                    <div className={styles.sizeGroup}>
                                                        {modalData.skuData.map((size, index) => (
                                                            <SizeItem
                                                                handleSetSize={handleSetSize}
                                                                key={index}
                                                                inStock={size.inStock}
                                                            >
                                                                {size.size}
                                                            </SizeItem>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonAdd}>
                                            <Button onClick={handleAddToCart} primary large>
                                                <p className={styles.add}>Add to bag</p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div title="Close (ESC)" onClick={() => handleClose()} className={styles.close}>
                                <ClearIcon width="30px" height="30px" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default Modal;
