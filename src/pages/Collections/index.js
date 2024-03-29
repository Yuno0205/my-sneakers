import CollectionsGroup from '../../components/CollectionsGroup';
import CollectionsItem from '../../components/CollectionsGroup/CollectionsItem/CollectionsItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/apiCall';

import { getProductFailure, getProductStart, getProductSuccess } from '../../redux/productSlice';
import { publicRequest } from '../../utils/request';

function Collections() {
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const listProduct = useSelector((state) => state.product.products);

    return (
        <CollectionsGroup>
            {listProduct.products?.map((item) => (
                <CollectionsItem item={item} key={item._id} />
            ))}
        </CollectionsGroup>
    );
}

export default Collections;
