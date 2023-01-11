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
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Fake from '../../components/Fake';

function Home() {
    const [openModal, setOpenModal] = useState(false);

    const handleShowModal = (value) => {
        setOpenModal(value);
    };

    const settings = {
        dot: true,
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
                    dot: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dot: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
                dot: true,
            },
        ],
    };

    const data = [
        {
            id: 1,
            title: 'Mario Kart™ 8 Deluxe',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
        },
        {
            id: 2,
            title: 'TRIANGLE STRATEGY™',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/t/triangle-strategy-switch/hero?_a=AJADJWI0',
        },
        {
            id: 3,
            title: 'Pokémon™ Legends: Arceus',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero?_a=AJADJWI0',
        },
        {
            id: 4,
            title: 'Super Mario™ 3D World + Bowser’s Fury',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?_a=AJADJWI0',
        },
        {
            id: 5,
            title: 'Cuphead',
            price: '$19.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0',
        },
        {
            id: 6,
            title: 'Minecraft',
            price: '$29.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0',
        },
        {
            id: 7,
            title: 'Mario + Rabbids® Kingdom Battle',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-plus-rabbids-kingdom-battle-switch/hero?_a=AJADJWI0',
        },
        {
            id: 8,
            title: 'Unravel Two',
            price: '$59.99',
            category: 'Nintendo Switch',
            sale: 63, //percent
            linkImg:
                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
        },
    ];
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
                                return <SaleItem sale key={index} item={item} handleShowModal={handleShowModal} />;
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
                        <ProductItem coating sale soldOut />
                        <ProductItem handleShowModal={handleShowModal} />
                        <ProductItem />
                        <ProductItem sale />
                        <ProductItem />
                    </Products>
                </div>
            </div>
            <Advertisement />
            <Blogs />
            <Modal handleShowModal={handleShowModal} openModal={openModal} />
        </div>
    );
}

export default Home;
