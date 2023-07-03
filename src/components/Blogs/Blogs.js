import Slider from 'react-slick';
import styles from './Blogs.module.css';
import images from '../../assets/images';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function BlogItem({ imageSrc, title, description, index }) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const delay = index * 0.2; // Khoảng thời gian delay giữa các item

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: inView ? 0.7 + delay : delay, // Đặt delay là 2s nếu trong tầm nhìn, nếu không thì sẽ có delay tăng dần theo index
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className={styles.item}
        >
            <div className={styles.image}>
                <img alt="Ảnh mô tả" src={imageSrc} />
            </div>
            <div className={styles.info}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </motion.div>
    );
}

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

    const items = [
        {
            imageSrc: images.blog1,
            title: 'Choose the perfect design',
            description:
                'We are good at lots of things: manufacturing high quality and good-looking shoes; designing fashion or professional apparels; sponsoring lots ...',
        },
        {
            imageSrc: images.blog2,
            title: 'Best user experience',
            description:
                'Their brand is associated with providing top-notch product for athletes that help them perform better.',
        },
        {
            imageSrc: images.blog3,
            title: 'Hang onto your memories',
            description:
                'Not only has been a trendsetter, but the shoe giant also seems to find a way to make the best use of existing trends.',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3> News</h3>
                    </div>
                    <Slider {...settings} className={styles.items}>
                        {items.map((item, index) => (
                            <BlogItem
                                key={index}
                                index={index}
                                imageSrc={item.imageSrc}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
