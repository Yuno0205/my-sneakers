import ProductItem from '../../components/Products/ProductItem/ProductItem';
import Products from '../../components/Products';
import styles from './Home.module.css';
import SliderBanner from '../../components/BannerSlider';
import Banner from '../../components/Banner';
import AdService from '../../components/AdService';
import SaleItem from '../../components/SaleItem';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Advertisement from '../../components/Advertisement/Advertisement';
import Blogs from '../../components/Blogs/Blogs';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Fake from '../../components/Fake';
import { publicRequest } from '../../utils/request';
import SoldOutProduct from '../../components/Products/ProductItem/SoldOutProduct';
import RightModal from '../../components/Modal/RightModal/RightModal';

function Home() {
    const [modalData, setModalData] = useState({});

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    const [data, setData] = useState([]);
    const [arival, setArrival] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getAllData = async () => {
            try {
                const res = await publicRequest.get(`/options/sale`);

                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getAllData();
    }, [page]);

    useEffect(() => {
        const getAllArrival = async () => {
            try {
                const res = await publicRequest.get(`/options/arrival`);

                setArrival(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getAllArrival();
    }, []);

    return (
        <div>
            {/* <SliderBanner /> */}
            <Fake />
            <Banner />
            <AdService />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>Discount Products</h3>
                        <div className={styles.frag}>
                            <span>Limited</span>
                        </div>
                    </div>

                    <div className={styles.sliderWrapper}>
                        <Slider {...settings}>
                            {data.map((item, index) => {
                                return <SaleItem sale key={index} item={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>New Arrivals</h3>
                    </div>
                    <Products>
                        <SoldOutProduct coating sale soldOut />

                        {arival ? (
                            arival?.map((arrival, index) => (
                                <ProductItem key={index} data={arrival} setModalData={setModalData} />
                            ))
                        ) : (
                            <div>No products</div>
                        )}
                    </Products>
                </div>
            </div>
            <Advertisement />
            <Blogs />
        </div>
    );
}

export default Home;
