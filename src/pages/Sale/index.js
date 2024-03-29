import CollectionsGroup from '../../components/CollectionsGroup';
import CollectionsItem from '../../components/CollectionsGroup/CollectionsItem/CollectionsItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Sale.module.css';
import { publicRequest } from '../../utils/request';

function Sale() {
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await publicRequest.get(`/products/sale`);

                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getAllProducts();
    }, [page]);

    return (
        <div className={styles.wrapper}>
            <CollectionsGroup>
                {data.products?.map((item) => (
                    <CollectionsItem item={item} key={item._id} />
                ))}
            </CollectionsGroup>
        </div>
    );
}

export default Sale;
