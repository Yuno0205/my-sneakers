import Tippy from '@tippyjs/react/headless';
import styles from './SuggestProduct.module.css';

function SuggestProducts({ setShowSuggestions, setDisplayCoating }) {
    return (
        <Tippy interactive>
            <div className={styles.content}>
                <div className={styles.suggest}>
                    <p>Top Suggestions</p>
                    <ul>
                        <li>Nike Air Force 10</li>
                        <li>Nike 1</li>
                        <li>Nike 1</li>
                        <li>Nike 1</li>
                        <li>Nike 1</li>
                    </ul>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <a>
                            <div className={styles.image}>
                                <img
                                    src="https://static.nike.com/a/images/t_default/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-NMmm1B.png"
                                    alt="image"
                                ></img>
                            </div>
                            <div className={styles.details}>
                                <h4>Nike Air Force 1</h4>
                                <p>Men Shoe's</p>
                                <span>2,000,000đ</span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.item}>
                        <a>
                            <div className={styles.image}>
                                <img
                                    src="https://static.nike.com/a/images/t_default/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-NMmm1B.png"
                                    alt="image"
                                ></img>
                            </div>
                            <div className={styles.details}>
                                <h4>Nike Air Force 1</h4>
                                <p>Men Shoe's</p>
                                <span>2,000,000đ</span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.item}>
                        <a>
                            <div className={styles.image}>
                                <img
                                    src="https://static.nike.com/a/images/t_default/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-NMmm1B.png"
                                    alt="image"
                                ></img>
                            </div>
                            <div className={styles.details}>
                                <h4>Nike Air Force 1</h4>
                                <p>Men Shoe's</p>
                                <span>2,000,000đ</span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.item}>
                        <a>
                            <div className={styles.image}>
                                <img
                                    src="https://static.nike.com/a/images/t_default/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-NMmm1B.png"
                                    alt="image"
                                ></img>
                            </div>
                            <div className={styles.details}>
                                <h4>Nike Air Force 1</h4>
                                <p>Men Shoe's</p>
                                <span>2,000,000đ</span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.item}>
                        <a>
                            <div className={styles.image}>
                                <img
                                    src="https://static.nike.com/a/images/t_default/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-NMmm1B.png"
                                    alt="image"
                                ></img>
                            </div>
                            <div className={styles.details}>
                                <h4>Nike Air Force 1</h4>
                                <p>Men Shoe's</p>
                                <span>2,000,000đ</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Tippy>
    );
}

export default SuggestProducts;
