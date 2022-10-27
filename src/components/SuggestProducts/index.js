import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

import styles from './SuggestProduct.module.css';

function SuggestProducts({ setDisplayCoating, setShowSuggestions, searchResults, loading }) {
    return (
        <Tippy interactive>
            <div className={clsx(styles.content)}>
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
                <div className={clsx(styles.items, { [styles.hide]: loading })}>
                    {searchResults ? (
                        searchResults.map((result) => (
                            <Link to={'/products'} className={styles.item} key={result.id}>
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
                            </Link>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
                {loading && <Loading />}
            </div>
        </Tippy>
    );
}

export default SuggestProducts;
