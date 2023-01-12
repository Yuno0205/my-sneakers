import Slider from 'react-slick';
import styles from './Blogs.module.css';

function Blogs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3> News</h3>
                    </div>
                    <Slider {...settings} className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img
                                    alt="pic"
                                    src="https://cdn.shopify.com/s/files/1/0267/0211/8947/articles/blog-9_99218164-c33e-48cb-a9d7-a7af341bb5fa_1024x1024.jpg?v=1570854295"
                                />
                            </div>
                            <div className={styles.info}>
                                <h4>Choose the perfect design</h4>
                                <p>
                                    We are good at lots of things: manufacturing high quality and good-looking shoes;
                                    designing fashion or professional apparels; sponsoring lots ...
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img
                                    alt="pic"
                                    src="https://cdn.shopify.com/s/files/1/0267/0211/8947/articles/blog-8_6f48cd0c-4877-4d4f-b537-6a8d8be0acd0_1024x1024.jpg?v=1570854301"
                                />
                            </div>
                            <div className={styles.info}>
                                <h4>Best user experience</h4>
                                <p>
                                    Their brand is associated with providing top-notch product for athletes that help
                                    them perform better.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img
                                    alt="pic"
                                    src="https://cdn.shopify.com/s/files/1/0267/0211/8947/articles/blog-7_1024x1024.jpg?v=1569828420"
                                />
                            </div>
                            <div className={styles.info}>
                                <h4>Hang onto your memories</h4>
                                <p>
                                    Not only has been a trendsetter, but the shoe giant also seems to find a way to make
                                    the best use of existing trends .
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
