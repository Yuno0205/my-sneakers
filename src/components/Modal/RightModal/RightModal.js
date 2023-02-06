import clsx from 'clsx';
import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import Image from '../../Image/Image';
import './RightModal.module.css';
import styles from './RightModal.module.css';

function RightModal({ setOpenModal, data }) {
    return (
        <div onClick={() => setOpenModal(false)} className={clsx(styles.modalBackground)}>
            <div className={styles.modalContainer}>
                <h3>Selected item</h3>
                <div className={styles.items}>
                    <div className={styles.imageItem}>
                        <Image alt="" src={data.imageMain[0]} />
                    </div>
                    <div className={styles.infoItem}>
                        <p>{data.title}</p>

                        <span>Color : {data.color}</span>
                        <p>{data.category}</p>
                        <p>
                            <NumericFormat
                                thousandSeparator={true}
                                value={data?.fullPrice ? data.fullPrice : data?.currentPrice}
                                suffix="  VND"
                                displayType="text"
                            />
                        </p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Link to="/wishlist" className={styles.viewBag}>
                        <span>View bag </span>
                    </Link>
                    <Link to="/cart" className={styles.checkOut}>
                        <span>Check out</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RightModal;
