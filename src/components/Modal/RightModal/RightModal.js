import clsx from 'clsx';
import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import Image from '../../Image/Image';
import './RightModal.module.css';
import styles from './RightModal.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const variants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
};

function RightModal({ setOpenModal, data }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => setOpenModal(false)}
                className={clsx(styles.modalBackground)}
            >
                <motion.div variants={variants} className={styles.modalContainer}>
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
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default RightModal;
