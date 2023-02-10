import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ColorWayImage.module.css';
import { useNavigate } from 'react-router-dom';

function ColorWayImage({ data }) {
    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.content)}>
                {data?.map((item, index) => (
                    <Link to={`/collections/${item._id}`} key={index} className={clsx(styles.item)}>
                        <img alt="" src={item.imageExtra[0]} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ColorWayImage;
