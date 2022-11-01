import styles from './Footer.module.css';
import { LogoIcon } from '../../../components/Icons';
import images from '../../../assets/images';

function Footer() {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                <img
                                    className={styles.logoFooter}
                                    src={images.logoWhite}
                                    alt="Jorkan - Running Sports Shoes "
                                />
                            </div>
                            <ul className={styles.listContent}>
                                <li>Sophisticated simplicity for the independent mind.</li>
                                <div className={styles.listIcons}>
                                    <div className={styles.socialIcons}>
                                        <img
                                            className={styles.socialIcon}
                                            src="https://img.icons8.com/color/344/facebook-new.png"
                                        />
                                    </div>
                                    <div className={styles.socialIcons}>
                                        <img
                                            className={styles.socialIcon}
                                            src="https://img.icons8.com/doodle/344/youtube-play--v2.png"
                                        />
                                    </div>
                                    <div className={styles.socialIcons}>
                                        <img
                                            className={styles.socialIcon}
                                            src="https://img.icons8.com/color/344/instagram-new--v1.png"
                                        />
                                    </div>
                                    <div className={styles.socialIcons}>
                                        <img
                                            className={styles.socialIcon}
                                            src="https://img.icons8.com/office/344/twitter.png"
                                        />
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                <h4>Help & infomation</h4>
                            </div>
                            <ul className={styles.listContent}>
                                <li>Harman Corporate</li>
                                <li>Careers</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Why Buy Direct</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                <h4>About us</h4>
                            </div>
                            <ul className={styles.listContent}>
                                <li>Blog</li>
                                <li>Help Center</li>
                                <li>We Deliver Almost Anywhere!</li>
                                <li>Registry</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                <h4>Categories</h4>
                            </div>
                            <ul className={styles.listContent}>
                                <li>Sitemap</li>
                                <li>Contact Us</li>
                                <li>Support Center</li>
                                <li>Delivery & Returns</li>
                                <li>Investors Site</li>
                                <li>FAQS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
