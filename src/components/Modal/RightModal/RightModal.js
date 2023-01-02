import clsx from 'clsx';
import React, { useState } from 'react';
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
                        <p>{data.fullPrice ? data.fullPrice : data.currentPrice} VND</p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.viewBag}>
                        <Link to="/wishlist">
                            <span>View bag (2)</span>
                        </Link>
                    </div>
                    <div className={styles.checkOut}>
                        <span>Check out</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightModal;
