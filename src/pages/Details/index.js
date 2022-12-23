import styles from './Details.module.css';
import Button from '../../components/Button';
import SizeGroup from '../../components/SizeGroup/SizeGroup';
import SizeItem from '../../components/SizeGroup/SizeItem/SizeItem';
import ColorWayImage from '../../components/ColorWayImage/ColorWayImage';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Image from '../../components/Image/Image';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const notifySizeValidate = () => toast.error('Opps ! You must choose at least one size !');
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState();
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [data, setData] = useState({});

    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products/find/' + id);

                setData(res.data);
            } catch {
                console.log('err when get single product');
            }
        };
        getSingleProduct();
    }, [id]);

    const handleAddToCart = () => {
        size
            ? dispatch(
                  addProduct({
                      ...data,
                      quantity,
                      color: data.color,
                      size: size,
                      price: data.fullPrice ? data.fullPrice * quantity : data.currentPrice * quantity,
                  }),
              )
            : notifySizeValidate();
    };

    const handleSetSize = (value) => {
        setSize(value);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.items}>
                        {data.imageMain?.map((images, index) => (
                            <div key={index} className={styles.item}>
                                <Image alt="" src={images} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.infoContent}>
                            <div className={styles.productInfo}>
                                <h1>{data.title}</h1>
                                <h2>Men's Shoes</h2>
                                {data.fullPrice ? <p>{data.fullPrice}</p> : <p>{data.currentPrice}</p>}
                            </div>
                            <ColorWayImage />
                            <SizeGroup>
                                {data.skuData?.map((data, index) => (
                                    <SizeItem handleSetSize={handleSetSize} key={index} inStock={data.inStock}>
                                        {data.size}
                                    </SizeItem>
                                ))}
                            </SizeGroup>
                            <div className={styles.descriptions}>
                                <p>
                                    Nike’s 1st lifestyle Air Max brings you style, comfort and big attitude. With a
                                    design that draws inspiration from past Air Max icons, the Nike Air Max 270
                                    showcases one of our greatest innovations yet with its large Air window. Deep red
                                    accents pop against the lightweight black knit upper for a look that's striking and
                                    versatile.
                                    {data.description}
                                </p>
                            </div>
                            <div className={styles.action}>
                                <Button onClick={handleAddToCart} primary large>
                                    <span>Add to bag</span>
                                </Button>
                                <ToastContainer />
                            </div>
                            <div className={styles.action}>
                                <Button primary large>
                                    <span> Favourite</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
