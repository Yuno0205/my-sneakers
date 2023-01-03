import clsx from 'clsx';
import ColoursWay from '../../layouts/SideBarLayout/SideBar/ColoursWay/ColoursWay';
import Button from '../Button';
import styles from './Modal.module.css';

function Modal({ openModal, handleShowModal }) {
    return (
        <div
            className={clsx(styles.wrapper, {
                [styles.active]: openModal,
            })}
            onClick={() => handleShowModal(false)}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img src="https://secure-images.nike.com/is/image/DotCom/DQ4686_300?align=0,1&cropN=0,0,0,0&resMode=sharp&fmt=jpg&wid=592&bgc=f5f5f5" />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoContent}>
                            <div className={styles.productInfo}>
                                <div className={styles.above}>
                                    <p>Men Shoe's</p>
                                    <span>2,000,000đ</span>
                                </div>
                                <p className={styles.bottom}>Nike Air Max 270</p>
                            </div>

                            <div className={styles.actions}>
                                <div className={styles.sizeWrapper}>
                                    <div className={styles.size}>
                                        <div className={styles.sizeTitle}>Selected size</div>
                                        <div className={styles.sizeContainer}>
                                            <div className={styles.sizeGroup}>
                                                <div className={styles.sizeItem}>40</div>
                                                <div className={styles.sizeItem}>40</div>
                                                <div className={styles.sizeItem}>40</div>
                                                <div className={styles.sizeItem}>40</div>
                                                <div className={styles.sizeItem}>40</div>
                                                <div className={styles.sizeItem}>40</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button primary large>
                                    <p className={styles.add}>Add to bag</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
