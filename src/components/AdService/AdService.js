import Slider from 'react-slick';

import styles from './AdService.module.css';
function AdService() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={styles.service}>
            <Slider {...settings} className={styles.serviceContent}>
                <div className={styles.serviceType}>
                    <div className={styles.serviceImg}>
                        <img src="https://cdn.shopify.com/s/files/1/0267/0211/8947/files/icon-3.jpg?v=1613628845" />
                    </div>
                    <div className={styles.serviceInfo}>
                        <div className={styles.serviceTitle}>FAST SHIPPING</div>
                        <div className={styles.contentInfo}>48h dispatch on most items</div>
                    </div>
                </div>

                <div className={styles.serviceType}>
                    <div className={styles.serviceImg}>
                        <img src="https://cdn.shopify.com/s/files/1/0267/0211/8947/files/icon-1.jpg?v=1613628845" />
                    </div>
                    <div className={styles.serviceInfo}>
                        <div className={styles.serviceTitle}>Huge system</div>
                        <div className={styles.contentInfo}>System with variety of products</div>
                    </div>
                </div>
                <div className={styles.serviceType}>
                    <div className={styles.serviceImg}>
                        <img src="https://cdn.shopify.com/s/files/1/0267/0211/8947/files/icon-2.jpg?v=1613628845" />
                    </div>
                    <div className={styles.serviceInfo}>
                        <div className={styles.serviceTitle}> Customer care</div>
                        <div className={styles.contentInfo}>Return service within 7 days</div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default AdService;
