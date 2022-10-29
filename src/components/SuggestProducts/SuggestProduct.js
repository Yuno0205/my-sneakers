import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Loading from '../Loading';
import NoProducts from '../Others/NoProduct';

import styles from './SuggestProduct.module.css';
import Image from '../Image/Image';

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
                <div className={clsx(styles.items)}>
                    {searchResults && searchResults.length > 0 ? (
                        searchResults.map((result) => (
                            <Link
                                to={'/products'}
                                className={clsx(styles.item, { [styles.hide]: loading })}
                                key={result.id}
                            >
                                <div className={styles.image}>
                                    <Image src={result.avatar} alt="Nhật Hào"></Image>
                                </div>
                                <div className={styles.details}>
                                    <h4>{result.full_name}</h4>
                                    <p>Men Shoe's</p>
                                    <span>2,000,000đ</span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <>{!loading && <NoProducts />}</>
                    )}
                    {loading && <Loading />}
                </div>
            </div>
        </Tippy>
    );
}

export default SuggestProducts;
