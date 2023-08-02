import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ModalCustom.module.css';
import { HeartIcon, SpinerIcon } from '../../Icons/Icons';
import Button from '../../Button/Button';
import { useSelector } from 'react-redux';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: {
        y: '100px',
        opacity: 1,
        transition: { delay: 0.5 },
    },
};

const ModalCustom = ({ showModal }) => {
    const { pending } = useSelector((state) => state.order);
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className={styles.backdrop}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {!pending ? (
                        <motion.div className={styles.modal} variants={modal}>
                            <p>It's on it's way !</p>

                            <span>
                                Thank you for your orders ! Your orders is on its way ! Use the link under to check its
                                progress or return to home page.we also charge your payment method for the cost of your
                                orders and will be removing any authorizing holds . For payments detail please visit
                                your orders page !
                            </span>
                            <div className={styles.redirect}>
                                <Button outline>
                                    <Link to="/">Home ?</Link>
                                </Button>
                                <Button primary>
                                    <Link to="/orders">
                                        <span>Your order ...</span>
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <></>
                    )}

                    {pending ? (
                        <div className={styles.spinnerWrap}>
                            <SpinerIcon extraClass={styles.triangulo} />
                        </div>
                    ) : (
                        <></>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalCustom;
