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
import Fake from '../../components/Slider';
import { publicRequest } from '../../utils/request';
import SoldOutProduct from '../../components/Products/ProductItem/SoldOutProduct';
import RightModal from '../../components/Modal/RightModal/RightModal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from 'react-responsive';
import MarqueeCustom from '../../components/Marquee';
import VideoCustom from '../../components/Video';
import Decoration from '../../components/Decoration';
import BannerSlider from '../../components/Slider/BannerSlider';

const screenSizes = {
    small: 480,
    medium: 768,
    large: 1024,
};

function Home() {
    const isSmallScreen = useMediaQuery({ maxWidth: screenSizes.small });
    const isMediumScreen = useMediaQuery({ minWidth: screenSizes.small + 1, maxWidth: screenSizes.medium });

    // Chiều cao skeleton item tương ứng với từng kích thước màn hình
    const skeletonItemHeight = isSmallScreen ? 200 : isMediumScreen ? 250 : 300;
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
                    dots: false,
                },
            },
        ],
    };

    const [data, setData] = useState([]);
    const [arival, setArrival] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getAllData = async () => {
            try {
                const res1 = await publicRequest.get('options/sale');
                const res2 = await publicRequest.get('options/arrival');
                setData(res1.data);
                setArrival(res2.data);
            } catch (err) {
                console.log('An error occurred :', err);
            } finally {
                setIsLoading(false);
            }
        };

        getAllData();
    }, []);

    // useEffect(() => {
    //     const getAllArrival = async () => {
    //         try {
    //             const res = await publicRequest.get(`options/arrival`);

    //             setArrival(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     getAllArrival();
    // }, []);

    return (
        <div>
            <BannerSlider />
            <Banner />
            <AdService />
            <Decoration />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>Discount Products</h3>
                        <div className={styles.frag}>
                            <span>Limited</span>
                        </div>
                    </div>

                    <div className={styles.sliderWrapper}>
                        {isLoading ? (
                            // Hiển thị skeleton loading khi isLoading = true

                            <div className={styles.skeList}>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                            </div>
                        ) : (
                            // Hiển thị dữ liệu khi đã fetch xong
                            <Slider {...settings}>
                                {data ? (
                                    data.map((item, index) => (
                                        <SaleItem key={index} item={item} setModalData={setModalData} />
                                    ))
                                ) : (
                                    <div>Cant find data !</div>
                                )}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>New Arrivals</h3>
                    </div>

                    {isLoading ? (
                        // Hiển thị skeleton loading khi isLoading = true
                        <div className={styles.skeletonWrapper}>
                            <div className={styles.skeList}>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                            </div>
                            <div className={styles.skeList}>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                                <div className={styles.skeItem}>
                                    <Skeleton height={skeletonItemHeight} />
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                    <p>
                                        <Skeleton />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Products>
                            <SoldOutProduct coating sale soldOut />
                            {arival ? (
                                arival.map((arrival, index) => (
                                    <ProductItem key={index} data={arrival} setModalData={setModalData} />
                                ))
                            ) : (
                                <div>No products</div>
                            )}
                        </Products>
                    )}
                </div>
            </div>
            <Advertisement />
            <MarqueeCustom />
            <VideoCustom />
            <Blogs />
        </div>
    );
}

export default Home;
