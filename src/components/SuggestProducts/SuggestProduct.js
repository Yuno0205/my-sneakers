import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import Loading from '../Loading';
import NoProducts from '../Others/NoProduct';
import styles from './SuggestProduct.module.css';
import Image from '../Image/Image';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

function SuggestProducts({ setDisplayCoating, setShowResults, searchResults, loading }) {
    const handleHide = () => {
        setShowResults(false);
        setDisplayCoating(false);
    };
    return (
        <Tippy interactive>
            <div className={clsx(styles.content)}>
                <div className={styles.suggest}>
                    <p>Top Suggestions :</p>
                    <ul>
                        <li>Nike Air Force 1</li>
                        <li>Nike Dunk Low</li>
                        <li>Air Jordan 1</li>
                        <li>Nike Blazer Low</li>
                    </ul>
                </div>
                <div className={clsx(styles.items)}>
                    {searchResults && searchResults.length > 0 ? (
                        searchResults.map((result) => (
                            <Link
                                to={`/collections/${result._id}`}
                                onClick={handleHide}
                                className={clsx(styles.item, { [styles.hide]: loading })}
                                key={result._id}
                            >
                                <div className={styles.image}>
                                    <Image src={result.imageMain[0]} alt="Nhật Hào"></Image>
                                </div>
                                <div className={styles.details}>
                                    <h4>{result.title}</h4>
                                    <p>Men Shoe's</p>
                                    <span>
                                        <NumericFormat
                                            thousandSeparator={true}
                                            value={result.fullPrice ? result.fullPrice : result.currentPrice}
                                            suffix="  VND"
                                            displayType="text"
                                        />
                                    </span>
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
