import Tippy from '@tippyjs/react/headless';
import styles from './SuggestProduct.module.css';

function SuggestProducts({ setDisplayCoating, setShowSuggestions, searchResults }) {
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
                    {searchResults ? (
                        searchResults.map((result) => (
                            <div className={styles.item} key={result.id}>
                                <a>
                                    <div className={styles.image}>
                                        <img src={result.avatar} alt="image"></img>
                                    </div>
                                    <div className={styles.details}>
                                        <h4>{result.full_name}</h4>
                                        <p>Men Shoe's</p>
                                        <span>2,000,000đ</span>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </Tippy>
    );
}

export default SuggestProducts;
