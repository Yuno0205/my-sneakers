import axios from 'axios';
import { getProductFailure, getProductStart, getProductSuccess } from './productSlice';
import { publicRequest } from '../utils/request';

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

//   export const deleteProduct = async (id, dispatch) => {
//     dispatch(deleteProductStart());
//     try {
//       // const res = await userRequest.delete(`/products/${id}`);
//       dispatch(deleteProductSuccess(id));
//     } catch (err) {
//       dispatch(deleteProductFailure());
//     }
//   };

//   export const updateProduct = async (id, product, dispatch) => {
//     dispatch(updateProductStart());
//     try {
//       // update
//       dispatch(updateProductSuccess({ id, product }));
//     } catch (err) {
//       dispatch(updateProductFailure());
//     }
//   };
//   export const addProduct = async (product, dispatch) => {
//     dispatch(addProductStart());
//     try {
//       const res = await userRequest.post(`/products`, product);
//       dispatch(addProductSuccess(res.data));
//     } catch (err) {
//       dispatch(addProductFailure());
//     }
//   };
